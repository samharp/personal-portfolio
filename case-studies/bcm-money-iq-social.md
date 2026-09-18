---
layout: layouts/case-study.njk
styles: /css/case-studies-styles.css
# Second-half of <head> page title
subtitle: "Beavercreek Marketing - MoneyiQ Social Portfolio Case Study"
# Metadata
description: "Redesigning Beavercreek Marketing's MoneyiQ Social dashboard: utilizing a given design language and building a reusable component library."
id: "bcm-online-education-center"
# Page header
header: "Beavercreek Marketing - MoneyiQ Social"
subheader: "Product Redesign & Build"
credits: [{"name": "Sammy Harper", "role": "UI/UX Designer, Web Designer, Web Developer"}, {"name": "Joe Gray", "role": "Client, Technical Project Manager"}, {"name": "Adam O'Callaghan", "role": "Client, Project Lead"}]
summary: "In using a pre-existing design language, I redesigned and built web components for Beavercreek Marketing's MoneyiQ Social product. MoneyiQ Social is used by BCM's clients to schedule social media content, email campaigns, and manage educational content available to them. The goal was to envision MoneyiQ Social as a modern product, with capabilities like social media posting, scheduling through a calendar interface, and browsing a library of curated content. Users would be able to use existing content as a template, or start posts entirely from scratch."
graphic: "/img/money-iq-social_content-calendar_calendar-view.png"
---

### The problem

Beavercreek Marketing mostly builds technology for banks and other financial institutions. Through products like the Online Education Center (OEC) and MoneyiQ, the company builds brandable click-through demos of their financial software, branded videos showcasing the capabilities of their financial products, and more.One of these core offerings is MoneyiQ Social, an online dashboard that gives clients access to custom branded videos and written copy to share on social media, email newsletters, and within internal teams. But with an aging design and modern functionality missing from the MoneyiQ Social product, it can be a hard sell for would-be clients.

The problems to be solved in this redesign were twofold.
1. The redesign had to incorporate a recently provided design language that would tie all of Beavercreek Marketing's products together.
2. The redesign needed to support the functionality of the current MoneyiQ Social dashboard and then some. The current product could handle social media planning and provided a library of content, but it could not yet allow clients to plan their posts on a calendar, integrate with Facebook/Instagram/etc. to directly post in-app, nor could it support a review process for a multi-member team.

<br>

![Screenshot showing Figma setup](/img/money-iq-social_figma-screenshot.png)

<br>

### The process

The process to building the new MoneyiQ Social dashboard consisted of creating mockups of the new pages in Figma, then translating those components into HTML, CSS, and JavaScript. These component source files would then be used by Beavercreek Marketing's developers to build the product on their own servers, utilizing their client database and existing assets. As an outside contractor, this was also determined to be the easiest way to share deliverables without navigating server access issues.

The majority of the time spent on this project was done inside Figma. The provided design language lived in its own Figma project, so by utilizing existing variables, components, and other shared assets, time could be better spent on visualizing the platform and exploring featuresets. Weekly meetings with Beavercreek Marketing leadership helped shaped what features were needed, how the existing MoneyiQ Social product functions, and what features would need to wait until a Version 3.0.

Once the final mockups were agreed on, I began to translate the Figma components and design language into HTML & CSS. The goal was to provide all of the pieces needed to build the platform, but not build a workable version of the platform itself. By creating reusable components, developers would be able to piece together all of the pages provided within the mockups. I developed some of the front-end functionality required by certain components, but back-end functionality would be handled by Beavercreek Marketing's own developers. Reusable components were dropped into HTML templates to visualize and interact with the working components to preface the hand-off.
 
<br>

<!-- a few images here -->
<div data-au="flex-container small-gap">
  <img src="/img/money-iq-social_content-releases-page.png" alt="MoneyiQ; Content Releases Page Mockup" data-au="flex-width">
  <img src="/img/money-iq-social_view-media-modal.png" alt="MoneyiQ; View Media Modal Mockup" data-au="flex-width">
  <img src="/img/money-iq-social_settings_your-team.png" alt="MoneyiQ; Your Team Settings Page Mockup" data-au="flex-width">
</div>

<br>

### The outcome

I was incredibly happy with the final version of the components and mockups of what they could become. This marked the first dashboard I had designed, and it was incredibly satisfying seeing the ideas come to life in the components that I built. I have taken my experience building this dashboard along with me to build another dashboard for [Canapi](https://www.canapi.io) and overall have a much better understanding of how to build scalable systems.

Unfortunately, as of this time, I don't believe the new MoneyiQ Social rebuild has gone live. At the conclusion of the project, there were other projects that required the attention of Beavercreek Marketing's developers, but there were also uncertainties about Beavercreek Marketing's own infrastructure capabilities for some of the newly explored features. However, in passing it off to the Beavercreek Marketing team, I am confident that they have all of the design pieces they need to one day make it come to life (unless they decide they want me to build it for them - I would love to see the project through to the end).

<br>

View their website at [bcm.io](https://bcm.io).