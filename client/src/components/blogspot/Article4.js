import React from "react";
import PropTypes from "prop-types";
import article4img from "../../img/article4img.jpg";
import ContactForm from "../layout/contactForm/ContactForm";

const Article4 = props => {
  const listing = {};

  return (
    <div>
      <div className='jumbotron jumbotron-fluid blog-jumbo'>
        <div class='container'>
          <h1 class='display-4'>BlogSpot</h1>
        </div>
      </div>
      <div className='row article1Row'>
        <div className='col-lg-7 offset-lg-1 col-md-6 col-sm-12 story'>
          <h4 className='titleHeaders'>
            4 NEGOTIATION TACTICS YOUR REAL ESTATE AGENT KNOWS
          </h4>
          <img src={article4img} alt='' />

          <h6>
            <em>
              Experience can make the most dramatic difference during a home
              purchase. 3
            </em>
          </h6>
          <p>
            Negotiating the purchase of your new home is one of the most crucial
            aspects of your real estate journey. It’s also when your real estate
            agent’s experience can make the most dramatic difference during the
            process of buying a home. RE/MAX agent Tony Iacoviello with RE/MAX
            Escarpment Realty in Hamilton, Ontario, shares four ways an agent
            acts as a professional negotiator, helping to ensure you’ll receive
            a fair closing agreement for your new home.
          </p>
          <p>
            <strong>Being in the Know</strong>
          </p>
          <p>
            Your real estate agent is a scholar when it comes to the real estate
            market. With their niche industry knowledge, they can take lead when
            it comes to negotiating a reasonable closing agreement based on the
            appropriate value of the home.{" "}
          </p>
          <p>
            “Knowledge is key in any negotiation, whether the real estate agent
            is representing the buyer or the seller of a property,” Iacoviello
            says. “Knowing the facts about a neighborhood, particularly sales
            history and current sales trends, is what helps to establish the
            value of a property, allows an agent to speak intelligently and
            confidently, and helps to ensure the client arrives at a fair and
            reasonable purchase or sales agreement.”{" "}
          </p>
          <p>
            <strong>Objectivity</strong>
          </p>
          <p>
            Your agent is trained to resolve conflict and knows how to remain
            cool, calm and collected during any intense moments of negotiation.{" "}
          </p>
          <p>
            “Emotion and anticipated enjoyment of a property are huge factors
            for both buyers and sellers and often lead to overestimates of a
            home’s market value, especially in comparison to recent sales
            history,” Iacoviello says. “An agent’s role, like that of any
            trusted advisor, is to acknowledge those emotions while remaining
            objective. Agents keep a level head so they can protect their
            client’s best interests and keep them grounded in reality.”
          </p>
          <p>
            <strong>Knowing What to Ask For</strong>
          </p>
          <p>
            Agents are well-versed in the language that surrounds negotiation.
            As your advocate, they’ll request maintenance, like concessions and
            repairs, in a manner that’s appealing to the seller.
          </p>
          <p>
            “Just like having knowledge of the neighborhood and local market
            conditions, facts are important when negotiating concessions and
            repairs,” Iacoviello says. “That knowledge isn’t limited to knowing
            what needs to be fixed, but also to the cost in time, money, and
            inconvenience of those repairs. Experienced agents can articulate
            what the buyer can expect based on what negotiations have yielded in
            similar situations.”
          </p>
          <p>
            <strong>Building Bridges, Not Burning Them</strong>
          </p>
          <p>
            Negotiation isn’t about working <em>against</em> the seller, it’s
            about working <em>with</em> the seller to get the best and most
            appropriate closing agreement for you.{" "}
          </p>
          <p>
            “While a real estate agent is bound to act in the client’s best
            interest and negotiations can become heated at times, negotiating
            isn’t a war or a battle,” Iacoviello says. “There are two groups of
            people, buyers and sellers, who want to work together to complete
            the sale of the property. The purpose of negotiating is to determine
            if there are terms like pricing, repairs, etc. both parties can
            agree to that will make the sale possible. It’s more about building
            bridges than blowing each other up. That’s it, really. It takes a
            lot of perseverance, patience and skill.”
          </p>
          <h6 className='byLine'>
            <em>Written by Laura Piscopio</em>
          </h6>
        </div>
        <ContactForm listing={listing} placeHolder={"Send us a message"} />
      </div>
    </div>
  );
};

Article4.propTypes = {};

export default Article4;
