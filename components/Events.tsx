"use client";

import { useState } from "react";
import { motion, LayoutGroup, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";
import { FluidExpandingGridProps } from "@/type";
import { ITEMS } from "@/constant";

export function Events({
  items = ITEMS,
  className,
  id = "fluid-gallery",
}: FluidExpandingGridProps) {
  const [layout, setLayout] = useState(() => {
    const ids = items.map((item) => item.id);
    return {
      row1: ids.slice(0, 2),
      row2: ids.slice(2, Math.min(items.length, 4)),
    };
  });

  const handleExpand = (id: string) => {
    const inRow1 = layout.row1.includes(id);
    const inRow2 = layout.row2.includes(id);

    if (
      (inRow1 && layout.row1.length === 1) ||
      (inRow2 && layout.row2.length === 1)
    )
      return;

    if (inRow1) {
      const neighbor = layout.row1.find((i) => i !== id)!;
      setLayout({
        row1: [id],
        row2: [neighbor, ...layout.row2.filter((i) => i !== neighbor)].slice(
          0,
          2,
        ),
      });
    } else {
      const neighbor = layout.row2.find((i) => i !== id)!;
      setLayout({
        row1: [neighbor, ...layout.row1.filter((i) => i !== neighbor)].slice(
          0,
          2,
        ),
        row2: [id],
      });
    }
  };

  return (
    <>
      <h1 className="text-4xl md:text-6xl text-[#16a34a] font-serif-display leading-tight tracking-tight">Events and other activities</h1>
      <div
        className={cn(
          "w-full h-full flex items-center justify-center overflow-hidden py-12 not-prose",
          className,
        )}
      >
        <div className="w-full max-w-2xl px-6">
          <LayoutGroup id={id}>
            <motion.div
              layout
              className="grid grid-cols-2 grid-rows-2 gap-6 w-full h-[340px] sm:h-[540px]"
            >
              {items.map((item) => {
                const isRow1 = layout.row1.includes(item.id);
                const rowArr = isRow1 ? layout.row1 : layout.row2;
                const isSelected = rowArr.length === 1 && rowArr[0] === item.id;

                const gridRow = isRow1 ? 1 : 2;
                let gridColumn = "";

                if (isSelected) {
                  gridColumn = "1 / span 2";
                } else {
                  gridColumn = rowArr.indexOf(item.id) === 0 ? "1" : "2";
                }

                return (
                  <motion.div
                    key={item.id}
                    layoutId={`${id}-${item.id}`}
                    onClick={() => handleExpand(item.id)}
                    style={{ gridRow, gridColumn } as any}
                    className={cn(
                      "relative cursor-pointer group w-full h-full",
                      isSelected ? "z-30" : "z-10",
                    )}
                    transition={{
                      layout: {
                        type: "spring",
                        stiffness: 100,
                        damping: 25,
                      },
                    }}
                  >
                    {/* Image */}
                    <motion.div
                      layoutId={`${id}-${item.id}-mask-wrapper`}
                      className="absolute inset-0 overflow-hidden bg-zinc-100"
                      style={{ borderRadius: 32 }}
                    >
                      <img
                        src={item.image}
                        alt={item.title}
                        className={cn(
                          "absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out",
                          isSelected
                            ? "object-[center_35%]"
                            : "object-[center_50%]",
                        )}
                      />
                      <motion.div
                        layoutId={`${id}-${item.id}-mask`}
                        className={cn(
                          "absolute inset-0 transition-colors duration-700",
                          isSelected ? "bg-black/10" : "bg-black/20",
                        )}
                      />
                    </motion.div>

                    {/* Content */}
                    <motion.div
                      layout="position"
                      className="absolute inset-0 p-6 flex flex-col justify-end text-white z-10 select-none"
                    >
                      <motion.div layout="position" className="overflow-hidden">
                        <motion.h3
                          layout="position"
                          className="text-2xl sm:text-3xl font-medium mb-1 tracking-tight"
                        >
                          {item.title}
                        </motion.h3>

                        <motion.p
                          layout="position"
                          className="text-xs sm:text-sm text-white/80 font-normal whitespace-nowrap"
                        >
                          {item.subtitle}
                        </motion.p>
                      </motion.div>

                      {/* Expanded Extra Info */}
                      <AnimatePresence>
                        {isSelected && (
                          <motion.div
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            transition={{ duration: 0.3 }}
                            className="mt-4 space-y-3 text-xs sm:text-sm"
                          >
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur">
                                {item.date}
                              </span>

                              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur">
                                {item.category}
                              </span>

                              <span className="px-3 py-1 rounded-full bg-white/10 backdrop-blur">
                                {item.mode === "Online"
                                  ? "Online"
                                  : "In Person"}
                              </span>
                            </div>

                            {item.link && (
                              <a
                                href={item.link}
                                className="inline-block text-sm underline underline-offset-4"
                              >
                                View Event →
                              </a>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>

                    {/* Overlay */}
                    <motion.div
                      layoutId={`${id}-${item.id}-overlay`}
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        borderRadius: 32,
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
                      }}
                    />

                    <motion.div
                      layoutId={`${id}-${item.id}-border`}
                      className="absolute inset-0 border border-white/10 group-hover:border-white/20 transition-colors duration-500 pointer-events-none"
                      style={{ borderRadius: 32 }}
                    />
                  </motion.div>
                );
              })}
            </motion.div>
          </LayoutGroup>
        </div>
      </div>
    </>
  );
}
