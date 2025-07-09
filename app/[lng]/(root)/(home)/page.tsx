import { translation } from '@/i18next/server'
import { LngParams } from '@/type'
import React from 'react'

async function HomePage({params :{lng}} : LngParams) {
  const {t} = await translation(lng,'home');
  return (
    <div className='mt-24 font-spaceGrotesk-mono font-medium'>{t("home")}</div>
  )
}

export default HomePage