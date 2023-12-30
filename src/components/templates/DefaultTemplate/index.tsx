import type { ReactNode } from 'react'

import S from './styles.module.scss'

import type { DefaultProps } from './types'

const DefaultTemplate = ({ children }: DefaultProps): ReactNode => (
  <div className={S.grid}>{children}</div>
)

export default DefaultTemplate
