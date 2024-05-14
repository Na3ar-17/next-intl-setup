'use client'

import LocaleSwitcher from '@/components/LocaleSwitcher'
import { NextPage } from 'next'
import { useTranslations } from 'next-intl'

const page: NextPage = () => {
  const t = useTranslations('Index')
  return (
    <div>
      <p>Settings</p>

      <p>{t('title')}</p>
      <LocaleSwitcher />
    </div>
  )
}

export default page
