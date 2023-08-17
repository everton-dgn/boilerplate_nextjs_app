// noinspection HtmlRequiredAltAttribute
import * as nextImage from 'next/image'

declare type ImgElementStyle = NonNullable<
  JSX.IntrinsicElements['img']['style']
>
declare const VALID_LAYOUT_VALUES: readonly [
  'fill',
  'fixed',
  'intrinsic',
  'responsive',
  'raw',
  undefined
]
declare type LayoutValue = (typeof VALID_LAYOUT_VALUES)[number]
declare type PlaceholderValue = 'blur' | 'empty'

type ImageProps = {
  objectFit?: ImgElementStyle['objectFit']
  priority?: boolean
  layout?: LayoutValue
  placeholder?: PlaceholderValue
  blurDataURL?: string
}

const object = {
  configurable: true,
  value: (props: ImageProps) => {
    const { objectFit, priority, layout, placeholder, blurDataURL, ...rest } =
      props
    return <img {...rest} style={{ height: '100%' }} />
  }
}

Object.defineProperty(nextImage, 'default', object)
