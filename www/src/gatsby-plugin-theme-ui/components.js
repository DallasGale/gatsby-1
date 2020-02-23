import React from "react"

import GuideList from "../components/mdx/guide-list.js"
import HubspotForm from "../components/mdx/hubspot-form"
import Pullquote from "../components/mdx/pullquote"
import EggheadEmbed from "../components/mdx/egghead-embed"
import DateChart from "../components/mdx/chart"
import LayerModel from "../components/mdx/layer-model"
import EmailCaptureForm from "../components/mdx/email-capture-form"
import HorizontalNavList from "../components/mdx/horizontal-nav-list"
import CodeBlock from "../components/code-block"
import MdxLink from "../components/mdx/mdx-link"
import Breakout from "../components/mdx/breakout"
import VisuallyHidden from "../components/ecosystem/visually-hidden"
import Events from "../components/mdx/events/events"
import StubList from "../components/mdx/stub-list"

export default {
  GuideList,
  HubspotForm,
  DateChart,
  Pullquote,
  EggheadEmbed,
  LayerModel,
  EmailCaptureForm,
  HorizontalNavList,
  Breakout,
  VisuallyHidden,
  Events,
  StubList,
  a: MdxLink,
  pre: ({ children }) => <CodeBlock>{children}</CodeBlock>,
}
