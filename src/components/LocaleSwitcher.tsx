import { NextPage } from 'next'
import { useTranslations } from 'next-intl'
import { usePathname, useRouter } from 'next/navigation'
import { ChangeEvent, useTransition } from 'react'

interface IProps {}

const LocaleSwitcher: NextPage<IProps> = ({}) => {
  const t = useTranslations('LocaleSwitcher')
  const [isPending, startTransition] = useTransition()
  const router = useRouter()
  const pathname = usePathname()

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const nextLocal = e.target.value
    const newUrl = pathname.replace(/^\/(\w{2})\/(.*)$/, `/${nextLocal}/$2`)
    console.log(newUrl)

    startTransition(() => {
      router.replace(`${newUrl}`)
    })
  }

  return (
    <label className="border-2  rounded-md">
      <p>{t('label')}</p>
      <select className="bg-black" onChange={onChange}>
        <option className="bg-slate-400" value="en">
          English
        </option>
        <option className="bg-slate-400" value="pl">
          Polish
        </option>
        <option className="bg-slate-400" value="ua">
          Ukrainian
        </option>
      </select>
    </label>
  )
}

export default LocaleSwitcher
