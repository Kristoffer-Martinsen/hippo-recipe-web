'use client';
import {
  ScrollShadow,
  Chip,
  Selection,
  Listbox,
  ListboxItem,
  Button,
} from '@heroui/react';
import { ListboxWrapper } from './ListboxWrapper';
import { useMemo, useState } from 'react';
import { Tag } from '@/types/tag';
import { deleteTagAction } from '@/lib/TagActions';

export default function TagList({ tags }: { tags: Tag[] | undefined }) {
  const [values, setValues] = useState<Selection>(new Set([]));
  const arrayValues = Array.from(values);
  
  const topContent = useMemo(() => {
    if (!arrayValues.length || !tags) {
      return null;
    }
    return (
      <ScrollShadow
        hideScrollBar
        className="w-full flex py-0.5 px-2 gap-1"
        orientation="horizontal"
      >
        {arrayValues.map((value) => {
          const tag = tags.find((tag) => `${tag.id}` === value);
          return tag ? <Chip key={value}>{tag.tagName}</Chip> : null;
        })}
      </ScrollShadow>
    );
  }, [arrayValues.length, tags]);

  
  const handleDeleteTag = async (id: number) => {
    await deleteTagAction(id);
  }

  if (!tags) return <h2>No tags found</h2>;

  return (
    <ListboxWrapper>
      <Listbox
        topContent={topContent}
        className="max-w-xs max-h-[300px] overflow-scroll"
        items={tags}
        label="Selected Tags"
        selectionMode="multiple"
        onSelectionChange={setValues}
        variant="flat"
      >
        {(item) => (
          <ListboxItem key={item.id} textValue={item.tagName}>
            <div className="flex gap-2 items-center">
              <div className="flex flex-col">
                <div>
                  <span className="text-small">{item.tagName}</span>
                  <Button
                    size="sm" 
                    color="danger"
                    onPress={() => handleDeleteTag(item.id)}>
                    X
                  </Button>
                </div>
              </div>
            </div>
          </ListboxItem>
        )}
      </Listbox>
    </ListboxWrapper>
  );
}
