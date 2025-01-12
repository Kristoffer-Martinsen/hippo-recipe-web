// 'use client'
// import { ScrollShadow, Chip, Selection, Listbox, ListboxItem } from "@nextui-org/react";
// import { ListboxWrapper } from "./ListboxWrapper";
// import { useMemo, useState } from "react";
// import { TagResult } from "@/models/Tag";

// export default function TagList({ tags }: { tags: TagResult | undefined}) {
//   const [values, setValues] = useState<Selection>(new Set([]));
//   const arrayValues = Array.from(values);
//   const topContent = useMemo(() => {
//     if (!arrayValues.length) {
//       return null;
//     }
//     return (
//       <ScrollShadow
//         hideScrollBar
//         className="w-full flex py-0.5 px-2 gap-1"
//         orientation="horizontal"
//       >
//         {arrayValues.map((value) => {
//           const tag = tags?.data.find(tag => `${tag.id}` === value);
//           return tag ? <Chip key={value}>{tag.tagName}</Chip> : null;
//         })}
//       </ScrollShadow>
//     );
//   }, [arrayValues.length]);

//   if (!tags) return <h2>No tags found</h2>

//   return (
//    <ListboxWrapper>
//     <Listbox
//       topContent={topContent}
//       className= "max-w-xs max-h-[300px] overflow-scroll"
//       items={tags.data}
//       label="Selected Tags"
//       selectionMode="multiple"
//       onSelectionChange={setValues}
//       variant="flat"
//       >
//         {(item) => (
//           <ListboxItem key={item.id} textValue={item.tagName}>
//             <div className="flex gap-2 items-center">
//               <div className="flex flex-col">
//                 <span className="text-small">{item.tagName}</span>
//               </div>
//             </div>
//           </ListboxItem>
//         )}
//       </Listbox>
//    </ListboxWrapper>
//   )
// }
