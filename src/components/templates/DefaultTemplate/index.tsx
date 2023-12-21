import type { ReactNode } from 'react'

import type { DefaultProps } from './types'

import S from './styles.module.scss'

const DefaultTemplate = ({ children }: DefaultProps): ReactNode => (
  <div className={S.grid}>{children}</div>
)

export default DefaultTemplate
