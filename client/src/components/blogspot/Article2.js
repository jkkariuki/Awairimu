import React from "react";
import PropTypes from "prop-types";
import article2img from "../../img/article2img.jpg";
import ContactForm from "../layout/contactForm/ContactForm";

const Article2 = props => {
  const listing = {};

  return (
    <div className=''>
      <div className='jumbotron jumbotron-fluid blog-jumbo'>
        <div class='container'>
          <h1 class='display-4'>BlogSpot</h1>
        </div>
      </div>

      <div className='row article1Row'>
        <div className='col-lg-7 offset-lg-1 col-md-6 col-sm-12 story'>
          <h4 className='titleHeaders'>First CEO: Why We Chose RE/MAX</h4>

          <img src={article2img} alt='' />

          <h6>
            <em>
              RE/MAX announces acquisition of First, the intelligent coaching
              platform. “It was refreshing to find a brand committed to
              developing products that truly improve productivity and success,”
              writes First CEO &amp; Co-Founder.
            </em>
          </h6>

          <p>
            We started First with a simple goal that’s now our mission:{" "}
            <em>
              to help agents win more business by focusing their effort on the
              right people.
            </em>
          </p>
          <p>
            This has been our guiding north star for creating and perfecting the
            intelligent coaching platform, which provides data-driven solutions
            to help real estate agents prioritize conversations and invest in
            business-growing relationships. It has motivated us to go deep on
            data to understand what actually helps agents grow their business,
            not just generate another lead. It has led us to solve hard problems
            like alerting agents to homeowners in their database who are most
            likely to sell, as well as automating the cleanup of messy contact
            databases and figuring out how to match property addresses to phone
            and email contacts.
          </p>
          <p>
            Most importantly, our mission has always been focused on agents. We
            believe agents are and will always be a crucial part of the
            home-buying and selling process. This focus has helped First
            consistently improve agents’ ability to win more deals in their
            network – not just by providing the best data and predictive
            intelligence, but also by understanding agents’ workflow and
            building a simple product that fits into their day. First’s
            technology takes work off agents’ plates so they can focus on what
            they do best: delivering incredible customer experiences.
          </p>
          <p>
            Early this year, we looked for ways to build on our core offering
            and explored integrating with brokerages and brands that shared our
            mission. The companies we met with quickly saw the potential of our
            platform, and many recognized how building a tight integration with
            the First platform would offer a significant competitive advantage
            in the market. Several approached us about acquiring First outright,
            and while we initially dismissed this option, we eventually decided
            to explore it further.
          </p>
          <p>
            Of all the companies, RE/MAX stood out for several reasons. First of
            all, our cultures are very aligned. From my first meeting with
            RE/MAX CEO Adam Contos, I realized how strongly we both agreed on
            the importance of building solid teams and taking care of our
            people. The quality of the leadership and the cultural foundations
            set by RE/MAX Co-Founders Dave and Gail Liniger are compelling. I
            love betting on great leaders who live out great values.
          </p>
          <p>
            It was refreshing to find a brand committed to developing products
            that truly improve productivity and success, and not just looking to
            build hype with headlines.
          </p>

          <p>
            It also became apparent that RE/MAX is playing the long game when it
            comes to diversification and investment in technology. For example,
            RE/MAX shares First’s commitment to leading the industry in data
            privacy and security, despite the additional costs. RE/MAX is
            working on more than just providing agents with in-house tools –
            RE/MAX is innovating and expanding opportunities for agents. It was
            refreshing to find a brand committed to developing products that
            truly improve productivity and success, and not just looking to
            build hype with headlines.
          </p>
          <p>
            Lastly, we were impressed by the RE/MAX vision for technology to
            help increase productivity among the industry’s best agents. RE/MAX
            agents already average more sales than other real estate agents, and
            meaningful technology investments will provide more tools to help
            agents extend that lead. Having the best agents will provide a
            superior customer experience, especially when backed by world-class
            technology.
          </p>
          <p>
            That’s why First chose RE/MAX. I am honored and excited to bring our
            team, platform and innovation to the RE/MAX network.
          </p>
          <h6 className='byLine'>
            <em>Written by Mike Schneider, First CEO & Co-Founder</em>
          </h6>
        </div>
        <ContactForm listing={listing} placeHolder={"Send us a message"} />
      </div>
    </div>
  );
};

Article2.propTypes = {};

export default Article2;
