---
linkTitle: "Home"
type: "docs"
no_list: true
weight: 20

cascade:
- type: "blog"
  # set to false to include a blog section in the section nav along with docs
  toc_root: false
  _target:
    path: "/blog/**"
- type: "docs"
  _target:
    path: "/**"
---


<div class="jumbotron px-5">
       <h1>Welcome to Cobalt Documentation</h1>
       <p class="my-3">Deep dive into our documentation to explore Cobalt—your all-in-one platform for pentesting your software.</p>
       <a class="btn btn-outline-primary" href="https://www.cobalt.io/get-started" target="_blank">Explore Cobalt »</a>
</div>


<div class="row g-4 py-2 px-5 row-cols-1 row-cols-lg-3">
     <div class="feature col">
       <div class="feature-icon d-inline-flex align-items-left justify-content-left text-bg-primary fs-2 mb-3">
         <img src="gsg/test.png" width="12%">
       </div>
       <h3 class="fs-2"><a href="/getting-started/">Getting Started</a></h3>
       <p>Use our step-by-step guide to launch your first pentest. Set up an asset, specify pentest details—and get the ball rolling.</p>
     </div>
     <div class="feature col">
       <div class="feature-icon d-inline-flex align-items-left justify-content-left text-bg-primary bg-gradient fs-2 mb-3">
         <img src="gsg/test.png" width="12%">
       </div>
       <h3 class="fs-2"><a href="/platform-deep-dive/pentests/pentest-process/methodologies/">Pentest Methodologies</a></h3>
       <p>Read about the methodologies that our pentesters use to test different types of assets: Web, API, Mobile, and more.</p>
     </div>
     <div class="feature col">
       <div class="feature-icon d-inline-flex align-items-left justify-content-left text-bg-primary bg-gradient fs-2 mb-3">
         <img src="gsg/test.png" width="12%">
       </div>
       <h3 class="fs-2"><a href="/platform-deep-dive/pentests/pentest-types/">Pentest Types</a></h3>
       <p>Learn about the pentest types that we offer. Explore the benefits of Agile and Comprehensive Pentests.</p>
     </div>
   </div>

<div class="row g-4 py-2 px-5 row-cols-1 row-cols-lg-3">
     <div class="feature col">
       <div class="feature-icon d-inline-flex align-items-left justify-content-left text-bg-primary fs-2 mb-3">
         <img src="gsg/test.png" width="12%">
       </div>
       <h3 class="fs-2"><a href="/platform-deep-dive/assets/">Asset Types</a></h3>
       <p>An asset is a software component of value to be tested, such as a web application or API. Learn more about the asset types we support.</p>
     </div>
     <div class="feature col">
       <div class="feature-icon d-inline-flex align-items-left justify-content-left text-bg-primary bg-gradient fs-2 mb-3">
         <img src="gsg/test.png" width="12%">
       </div>
       <h3 class="fs-2"><a href="/integrations/">Integrations</a></h3>
       <p>Learn how to use the Cobalt API, get pentest updates with webhooks, and configure integrations with third-party apps.</p>
     </div>
     <div class="feature col">
       <div class="feature-icon d-inline-flex align-items-left justify-content-left text-bg-primary bg-gradient fs-2 mb-3">
         <img src="gsg/test.png" width="12%">
       </div>
       <h3 class="fs-2"><a href="/product-updates/">What’s New</a></h3>
       <p>We regularly ship updates to the Cobalt platform. Read our monthly release blog to stay on top of the latest news.</p>
     </div>
   </div>


<div class="row align-items-md-stretch my-5">
      <div class="col-md-6">
        <div class="h-100 p-5 border border-primary rounded-3">
          <h3>Try Beta Integrations</h3>
          <p class="my-2">{{% beta-label %}}</p>
          <p>Request to <a href="/integrations/#request-a-beta-integration">enable a beta integration for your next pentest</a> to streamline your remediation workflows. Customize the configuration to suit your needs, and start pushing Cobalt findings to your preferred task management software: Azure DevOps, ServiceNow, or BitBucket.</p>
       <a href="https://docs.google.com/forms/d/e/1FAIpQLScMNMnpIvJRNxEziIBCu246g_YqMuGU052XE-Q-gVh3mjy9XQ/viewform" target="_blank">Request an integration »</a><br>
        </div>
      </div>
      <div class="col-md-6">
        <div class="h-100 p-5 text-bg-dark border border-primary rounded-3">
          <h3>Preview Risk Advisories</h3>
          <p class="my-2">{{% new-label %}}</p>
          <p>Add a technology stack for your software asset, and we'll show you a preview of risk advisories based on the Common Vulnerabilities and Exposures (CVE) standard for that stack. Subscribe to email alerts <img title="Bell icon" alt="Bell icon" src="/icons/Bell.png"> for potential critical vulnerabilities discovered in your assets.</p>
          <a href="/platform-deep-dive/assets/risk-advisories/">Read the guide »</a>
        </div>
      </div>
    </div>

<div class="text mx-5">
  <h3>Need More Help? Get in Touch!</h3>
  <p>If you need help, don't hesitate to contact us.</p><ul><li>If you have a named Customer Success Manager, get in touch with them.</li><li>Otherwise, <a href="https://cobaltio.zendesk.com/hc/en-us/requests/new" target="_blank">submit a ticket</a> or send an email to <a href="mailto:support@cobalt.io" target="_blank">support@cobalt.io</a>.</ul>
</div>
