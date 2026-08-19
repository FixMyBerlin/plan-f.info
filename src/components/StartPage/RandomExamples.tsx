import React, { useState } from 'react'

import { CardExample } from '~/components/MeasurePage/CardExample'
import { CardWrapperMeasurePage } from '~/components/MeasurePage/CardWrapperMeasurePage'

export type ExampleCard = {
  title: string
  shortDescription: string
  path: string
  image: { src: string; copyright?: string }
}

/** Candidate example cards (one per measure) to choose from. */
type Props = { examples: ExampleCard[] }

const pickThree = (examples: ExampleCard[]): ExampleCard[] =>
  [...examples].sort(() => 0.5 - Math.random()).slice(0, 3)

// Rendered as a `client:only` island, so this runs only in the browser and shows a fresh
// random selection on every visit (no SSR pass → no hydration mismatch to design around).
export const RandomExamples: React.FC<Props> = ({ examples: pool }) => {
  const [examples] = useState<ExampleCard[]>(() => pickThree(pool))

  return (
    <CardWrapperMeasurePage className="mt-12">
      {examples.map((example) => (
        <CardExample
          key={example.path}
          title={example.title}
          link={example.path}
          image={example.image}
        >
          <div>
            <p className="text-sm text-gray-700 md:text-base">{example.shortDescription}</p>
          </div>
        </CardExample>
      ))}
    </CardWrapperMeasurePage>
  )
}
