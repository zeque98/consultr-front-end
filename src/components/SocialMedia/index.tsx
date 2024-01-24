import GithubLogo from '../../assets/logo-github.svg?react'
import LinkedinLogo from '../../assets/logo-linkedin.svg?react'
import TelegramLogo from '../../assets/logo-telegram.svg?react'
import * as C from './styles'

export function SocialMedia() {
	return (
		<C.Container>
			<li>
				<C.Link href='https://www.linkedin.com/in/carlosdancr/'>
					<LinkedinLogo />
				</C.Link>
			</li>
			<li>
				<C.Link href='https://github.com/carlosdancr'>
					<GithubLogo />
				</C.Link>
			</li>
			<li>
				<C.Link href='https://t.me/carlosdancr'>
					<TelegramLogo />
				</C.Link>
			</li>
		</C.Container>
	)
}
