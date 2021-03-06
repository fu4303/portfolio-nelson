import React from "react"
import Layout from "@/components/layout"
import SEO from "@/components/seo"
import Hero from "@/components/hero"
import { device } from "@/components/device"
import Card from "@/components/card"
import ButtonInternal from "@/components/buttoninternal"
import ButtonExternal from "@/components/buttonexternal"
import SectionHeader from "@/components/sectionheader"
import PostPreview from "@/components/postpreview"
import Project from "@/components/project"

import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { postFilePaths, POSTS_PATH } from "../lib/mdxUtils"

import apollo from "../public/images/index/apollo.png"
import autooth from "../public/images/index/autooth.png"
import blender from "../public/images/index/blender.png"
import claquette from "../public/images/index/claquette.png"
import craft from "../public/images/index/craft.png"
import github from "../public/images/index/github.png"
import instagram from "../public/images/index/instagram.png"
import montereyImage from "../public/images/index/montereyimage.png"
import mosaic from "../public/images/index/mosaic.png"
import notes from "../public/images/index/notes.png"
import slack from "../public/images/index/slack.png"
import stocketa from "../public/images/index/stocketa.png"
import xcode from "../public/images/index/xcode.png"

const IndexPage = ({ posts }) => {
  const orderedPosts = posts.sort(
    (a, b) =>
      Number(new Date(b.data.modified)) - Number(new Date(a.data.modified))
  )

  return (
    <Layout>
      <SEO />
      <div className="wrapper">
        <div className="hero-container">
          <Hero />
        </div>
        <a aria-label="Work" id="work" href="/#work">
          <h1 className="anchor"></h1>
        </a>

        <SectionHeader section="Posts" />

        <div className="post-grid">
          {orderedPosts.map((post, key) => {
            return (
              <PostPreview
                key={key}
                title={post.data.title}
                date={post.data.date}
                href={`${post.filePath.replace(/\.mdx?$/, "")}`}
              />
            )
          })}
        </div>

        <SectionHeader section="Projects" />
        <div className="project-grid">
          <Project
            title="Highlights"
            description="A feed of passages I've highlighted from articles across the web."
            href="/highlights"
          />
          <Project
            title="Heavy Rotation"
            description="A collection of what I've been listening to recently."
            href="/musicthread/heavy-rotation"
          />
        </div>
        <div className="card-grid">
          <Card
            width="double"
            src={montereyImage}
            title="Monterey"
            subtitle="Icon Design"
          >
            <ButtonExternal link="https://gumroad.com/l/dvctd" />
          </Card>
        </div>

        <SectionHeader section="Icons" />
        <div className="card-grid">
          <Card width="double" src={craft} title="Craft" subtitle="2021">
            <ButtonExternal link="https://www.craft.do" />
          </Card>
          <Card width="single" src={stocketa} title="Stocketa" subtitle="2021">
            <ButtonExternal link="https://stocketa.com" />
          </Card>
          <Card
            width="single"
            src={github}
            title="GitHub G1 Chip"
            subtitle="2021"
          >
            <ButtonExternal link="https://apps.apple.com/app/github/id1477376905?ls=1" />
          </Card>
          <Card
            width="single"
            src={claquette}
            title="Claquette"
            subtitle="2020"
          >
            <ButtonExternal link="https://www.peakstep.com/claquette/" />
          </Card>

          <Card width="single" src={mosaic} title="Mosaic" subtitle="2020">
            <ButtonExternal link="https://mosaic.rcopstein.com" />
          </Card>

          <Card width="single" src={autooth} title="Autooth" subtitle="2020">
            <ButtonExternal link="https://app.airport.community/app/recGP4zZQMV3WB9LZ" />
          </Card>

          <Card
            width="single"
            src={apollo}
            title="Apollo Reddit"
            subtitle="2020"
          ></Card>

          <Card width="double" src={slack} title="Slack" subtitle="2020"></Card>

          <Card
            width="single"
            src={instagram}
            title="Instagram"
            subtitle="2020"
          ></Card>

          <Card width="single" src={xcode} title="Xcode" subtitle="2020"></Card>

          <Card width="single" src={notes} title="Notes" subtitle="2020"></Card>
          <Card
            width="single"
            src={blender}
            title="Blender"
            subtitle="2020"
          ></Card>
        </div>
      </div>
      <style jsx>{`
        .wrapper {
          max-width: 656px;
          padding: 0 5% 0 5%;
          margin: 0 auto;
        }

        .hero-container {
          margin-top: -1rem;
          display: grid;
          height: 100vh;
          align-items: center;
          justify-content: center;
        }

        .post-grid,
        .project-grid {
          display: grid;
          grid-template-columns: auto;
          grid-gap: 0.5rem;
          max-width: 816px;
        }

        .project-grid {
          margin-bottom: 2rem;
        }

        @media only screen and (min-width: 768px) {
          .post-grid,
          .project-grid {
            grid-gap: 0.25rem;
          }

          .project-grid {
            margin-bottom: 1rem;
          }
        }

        .card-grid {
          display: grid;
          grid-template-columns: auto;
          grid-column-gap: 1rem;
          grid-row-gap: 2rem;
        }

        .anchor {
          padding-top: 1rem;
          margin-top: -1rem;
        }

        @media ${device.desktop} {
          .hero-container {
            margin-top: 1rem;
          }

          .card-grid {
            grid-template-columns: 49.01960784% 49.01960784%;
            grid-column-gap: 0.5rem;
            grid-row-gap: 1rem;
          }

          .anchor {
            padding-top: 0.5rem;
            margin-top: -0.5rem;
          }
        }
      `}</style>
    </Layout>
  )
}

export default IndexPage

export function getStaticProps() {
  const posts = postFilePaths.map(filePath => {
    const source = fs.readFileSync(path.join(POSTS_PATH, filePath))

    const { data } = matter(source)

    return {
      data,
      filePath,
    }
  })

  return { props: { posts } }
}
