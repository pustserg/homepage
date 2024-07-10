import Image from "next/image";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faLinkedin, faGithub, faTelegram } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'; import fontawesome from '@fortawesome/fontawesome'
import '@fortawesome/fontawesome-svg-core/styles.css'

fontawesome.config.autoAddCss = false;

library.add(faLinkedin, faGithub, faEnvelope, faTelegram);

export default function Sidebar() {
  return (
    <>
      <p className="text-center">
        <Image src="/avatar.jpg" alt="Sergey Pustovalov" width={300} height={300} className="rounded-full" />
      </p>
      <p className="pt-16 text-lg">
        Hi, my name Sergey Pustovalov.
        <br />
        I am a backend software engineer currently based in Amsterdam.
        <br />
        I love to make great things and solve complex problems.
        <br />
        My main programming language is Ruby. Also I am interested in Elixir and Golang.
      </p>
      <p className="pt-2">
        <a href="https://linkedin.com/in/pustserg" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'linkedin']} fixedWidth size="2x" />
        </a>
        <a href="https://github.com/pustserg" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'github']} fixedWidth size="2x" />
        </a>
        <a href="https://t.me/pustserg" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={['fab', 'telegram']} fixedWidth size="2x" />
        </a>
        <a href="mailto:pustserg@me.com">
          <FontAwesomeIcon icon={['fas', 'envelope']} fixedWidth size="2x" />
        </a>
      </p>
    </>
  )
}
