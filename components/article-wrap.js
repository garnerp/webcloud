import React from "react";
import Head from "next/head";
import { Wrap } from "./wrap";
import { Link } from "./link";
import { Flex } from "./flex";
import { Card } from "./card";
import { Spacer } from "./spacer";
import { Paragraph } from "./paragraph";
import { Title } from "./title";
import { BackToBase } from "./back-to-base";
import { createComponentWithProxy } from "react-fela";
const Avatar = createComponentWithProxy(
  {
    width: "72px",
    height: "72px",
    "@media (min-width: 480px)": {
      width: "96px",
      height: "96px"
    },
    borderRadius: "50%",
    boxShadow: "var(--shadow)"
  },
  "img"
);

export const ArticleWrap = ({ title, children }) => (
  <Wrap>
    <Head>
      <title>{title} - webcloud</title>
    </Head>
    <BackToBase />
    {children}
    <Spacer size={8} />
    <Card extend={{ width: "100%", flexDirection: "row", marginLeft: "-16px" }}>
      <div>
        <Avatar src="/photo.jpg" />
      </div>
      <Spacer size={3} />
      <Flex>
        <Title variant="kiwi">Hi, thanks for reading!</Title>
        <Spacer size={2} />
        <Paragraph extend={{ color: "var(--color-fg-alt)" }}>
          I&rsquo;m Daniel, Software Engineer from Sweden. This is my personal{" "}
          <Link href="/">website</Link>. You can also find me on{""}{" "}
          <Link href="https://twitter.com/roflwtfbbq">Twitter</Link> and{" "}
          <Link href="https://github.com/danielstocks">GitHub</Link>.
        </Paragraph>
      </Flex>
    </Card>
    <Spacer size={14} />
  </Wrap>
);
