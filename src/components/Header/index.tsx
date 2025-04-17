import { HeaderBar, Title } from './styles'

import logo from '../../assets/images/logo.png'

const Header = () => (
  <HeaderBar>
    <div>
      <img src={logo} alt="EFOOD" />
    </div>
    <Title>
      Viva experiências gastronômicas <br />
      no conforto da sua casa
    </Title>
  </HeaderBar>
)

export default Header
