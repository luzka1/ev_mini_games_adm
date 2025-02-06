import React from "react";

interface CardsGroup {
  props: any;
}

export const CardsGroup = ({ props }: CardsGroup[]) => {
  return (
    <div className="grid gap-4 grid-cols-[repeat(auto-fill,_minmax(350px,_1fr))] w-full">
      {props.map((item, index) => (
        <div
          key={index}
          style={{ backgroundColor: item.game_color }}
          className="rounded-xl h-[350px] w-full flex items-end shadow-xl"
        >
          <div className="bg-white h-1/3 w-full rounded-b-xl py-2 px-4 flex backdrop-blur-2xl">
            <div className="">
              <span className="text-xl font-bold">{item.game_name}</span>
              <p className="text-sm text-muted-foreground">{item.game_desc}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
