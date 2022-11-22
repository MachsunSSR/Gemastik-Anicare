import React, { FC } from 'react'
import * as HIcons from '@heroicons/react/outline'

const DynamicHeroIcon: FC<{icon: string}> = (props) => {
  const {...icons} = HIcons
  // @ts-ignore
  const TheIcon: JSX.Element = icons[props.icon]

  return (
    <>
      {/* @ts-ignore */}
      <TheIcon className="h-6 w-6 text-white" aria-hidden="true" />
    </>
  )
}

export default DynamicHeroIcon