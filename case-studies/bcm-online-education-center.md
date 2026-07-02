---
layout: layouts/case-study.njk
styles: /css/case-studies-styles.css
# Second-half of <head> page title
subtitle: "Online Education Center Portfolio Case Study"
# Metadata
description: ""
id: "bcm-online-education-center"
# Page header
header: "Beavercreek Marketing - Online Education Center"
subheader: "Website Redesign & Build"
credits: [{"name": "Sammy Harper", "role": "UI/UX Designer, Web Designer, Web Developer"}, {"name": "Joe Gray", "role": "Client, Technical Project Manager"}, {"name": "Adam O'Callaghan", "role": "Client, Project Lead"}]
summary: "In using a pre-existing design language, I redesigned and built web components for Beavercreek Marketing's existing Online Education Center (OEC). The OEC is used by BCM's clients to schedule social media content, email campaigns, and manage educational content available to them. The goal was to envision the OEC as a modern product, with capabilities like social media posting, scheduling through a calendar interface, and browsing a library of curated content. Users would be able to use existing content as a template, or start posts entirely from scratch."
graphic: "/img/bcm-logo.png"
---

### The problem

Beavercreek Marketing mostly builds technology for banks and other financial institutions. One of these core offerings is their Online Education Center (OEC), giving clients access to custom branded videos, articles, and click through demos of banking products. The OEC is the dashboard to everything Beavercreek Marketing does, and with an aging design, it can be a hard sell for prospective clients.

However, the problems to be solved in this redesign were twofold. One - the redesign had to incorporate a newly provided design language that would tie all Beavercreek Marketing's products together. And two - the redesign needed to support the functionality of the current OEC and then some. The current OEC could handle social media planning and provided a library of content, but it could not yet allow clients to plan their posts on a calendar, integrate with Facebook/Instagram/etc. to directly post on their behalf, or support a review process for a multi-member team.

### The process

The process to building the new OEC consisted of creating mockups of the new pages in Figma, then translating those components into HTML, CSS, and JavaScript. These component source files would then be used by Beavercreek Marketing's developers to build the product on their own servers, utilizing their client database and existing assets.

The majority of the time spent on this project was done inside Figma. The provided design language lived in its own Figma project, so by utilizing existing variables, components, and other shared assets, time could be better spent on visualizing the platform and exploring featuresets. Weekly meetings with Beavercreek Marketing leadership helped shaped what features were needed, how the existing OEC functions, and what features would need to wait until a later build (version 2).

Once the final schema was determined, I began to translate the Figma components and design language into HTML & CSS. The goal was to provide all of the pieces needed to build the platform, but not build a workable version of the platform itself. By creating reusable components, developers would be able to piece together all of the pages provided within the mockups. This too meant that any components needed for version 2 could be developed ahead of time and wired up when the time came later. I developed some of the front-end functionality required by certain components, but back-end functionality would be handled by Beavercreek Marketing's own developers. Reusable components were dropped into HTML templates to visualize and interact with the working components.
 

### The outcome

I was incredibly happy with the final version of the components and mockups of what they could become. This marked the first dashboard I had designed, and it was incredibly satisfying seeing the ideas come to live in the components that I built. I have taken my experience building this dashboard along with me to build another dashboard for [Canapi](https://www.canapi.io) and overall have a much better understanding of how to build scalable systems.

Unfortunately, as of this time, I don't believe the new OEC has gone live. At the conclusion of the project, it sounded like there were other projects that required developer attention, but there were also uncertainties about the infrastructure this product would reside on. However, in passing it off to the Beavercreek Marketing team, I am confident that they have all of the design pieces they need to one day make it come to life.

View their website at [bcm.io](https://www.bcm.io).