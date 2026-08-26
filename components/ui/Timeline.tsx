// components/ui/Timeline.tsx

import React from "react";

import { cn } from "@/lib/utils";


interface TimelineProps {

  children:
    React.ReactNode;


  className?:
    string;

}



interface TimelineItemProps {

  children:
    React.ReactNode;


  title?:
    string;


  date?:
    string;


  icon?:
    React.ReactNode;


  className?:
    string;

}



export function Timeline({

  children,

  className,

}: TimelineProps) {


  return (

    <div

      className={cn(

        `
        relative

        ml-3

        border-l

        border-[var(--color-border)]

        space-y-8

        `,

        className

      )}

    >

      {children}

    </div>

  );

}



export function TimelineItem({

  children,

  title,

  date,

  icon,

  className,

}: TimelineItemProps) {


  return (

    <div

      className={cn(

        `
        relative

        pl-8

        `,

        className

      )}

    >


      {/* Timeline dot */}

      <div

        className="
        absolute

        -left-[11px]

        top-1

        flex

        h-5
        w-5

        items-center
        justify-center

        rounded-full

        bg-[var(--color-background)]

        border-2

        border-[var(--color-primary)]

        "

      >

        {
          icon
            ?

            (

              <span

                className="
                text-[var(--color-primary)]
                [&>svg]:h-3
                [&>svg]:w-3
                "

              >

                {icon}

              </span>

            )

            :

            (

              <span

                className="
                h-2
                w-2

                rounded-full

                bg-[var(--color-primary)]

                "

              />

            )
        }


      </div>



      {/* Content */}

      <div

        className="
        space-y-2

        "

      >

        {
          date &&

          (

            <p

              className="
              text-sm

              text-[var(--color-text-muted)]

              mb-0

              "

            >

              {date}

            </p>

          )

        }



        {
          title &&

          (

            <h3

              className="
              text-lg

              font-medium

              text-[var(--color-text-primary)]

              "

            >

              {title}

            </h3>

          )

        }



        <div>

          {children}

        </div>


      </div>


    </div>

  );

}