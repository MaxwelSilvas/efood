import { TagContainer } from './styles'

export type Props = {
  size?: 'small'
  children: string
}

export const Tag = ({ children, size = 'small' }: Props) => (
  <TagContainer size={size}>{children}</TagContainer>
)

export default Tag
