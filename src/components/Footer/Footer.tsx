import React from 'react';

type Props = {
  title: string;
}

const Footer = (props: Props) => {
  return (
    <div>{props.title}</div>
  )
}

export default Footer;
