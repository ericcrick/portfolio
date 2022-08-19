import { FaGithub, FaTwitter, FaTwitch,FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill} from 'react-icons/bs'

export const socialIcons = [
  {
    id: 1,
    name: 'Github',
    icon: FaGithub,
    bgColor: 'bg-[#333]',
    url: ''
  },
  {
    id: 2,
    name: 'Twitter',
    icon: FaTwitter,
    bgColor: 'bg-[#1DA1F2]',
    url: ''
  },
  {
    id: 3,
    name: 'LinkedIn',
    icon: FaLinkedin,
    bgColor: 'bg-[#0077b5]',
    url: ''
  },
  {
    id: 4,
    name: 'Twitch',
    icon: FaTwitch,
    bgColor: 'bg-[#6441a5]',
    url: ''
  },
  {
    id: 5,
    name: 'Email',
    icon: HiOutlineMail,
    bgColor: 'bg-[#17E3E1]'
  },
  {
    id: 6,
    name: 'Resume',
    icon: BsFillPersonLinesFill,
    bgColor: 'bg-[#5b6473]',
    url: ''
  },
]

export const links = [
  {
    id: 1,
    name: "Home",
  },
  {
    id: 2,
    name: "About"
  },
  {
    id: 3,
    name: "Experience"
  },
  {
    id: 4,
    name: "Skills"
  },
  {
    id: 5,
    name: "Contact"
  }
  
]