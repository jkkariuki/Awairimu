import React from "react";
import PropTypes from "prop-types";
import article1img from "../../img/article1img.jpg";
import ContactForm from "../layout/contactForm/ContactForm";

const Article1 = props => {
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
          <h4 className='titleHeaders'>
            READY TO BUY A HOME TOGETHER? 4 SCENARIOS TO TALK THROUGH WITH A
            PARTNER
          </h4>
          <img src={article1img} alt='' />
          <h6>
            <em>Wedding or not, homeownership can be for anyone.</em>
          </h6>
          <p>
            Whether they’re not quite ready to tie the knot or would rather
            spend money on a down payment than a wedding, many couples are
            choosing to purchase a home with their partner prior to taking a
            trip down the aisle. “Couples are deciding to buy a house rather
            than throw money away on rent, or they’re interested in the
            potential tax benefits of homeownership,” says Janen Ardia, Broker
            of Record for RE/MAX Heritage Properties in New Jersey. “All of
            those are very valid reasons.” Yet she adds that there’s plenty for
            couples to think about before entering into a serious commitment
            like buying a home together, potentially even consulting a legal
            professional beforehand.
          </p>
          <p>
            “That’s hard to do for someone with stars in their eyes because they
            think their love will last forever. And you hope it does! But just
            in case it doesn’t, it’s important to protect yourself,” Ardia says.
            “There are no defaults in place to protect unmarried couples, should
            a property need to be sold or the partnership ends. There are many
            scenarios that could affect the outcome.” Below are four
            hypothetical scenarios of couples buying a home together without
            being married, and advice from real estate professionals for each
            situation.
          </p>
          <h5 className='articleHeaders'>
            HOMEBUYING COUPLE NO. 1: JENNA + MIKE, UNEQUAL FINANCIAL
            CONTRIBUTORS{" "}
          </h5>
          <p>
            Jenna has been talking about moving in with her boyfriend for a few
            months now. Instead of continuing to pay rent, she’d like to buy a
            condo. Jenna is able to contribute $10,000 to the down payment, and
            Mike is contributing $5,000. Jenna and Mike’s first step? They may
            want to talk to a lawyer. “We strongly recommend getting an attorney
            involved to draw up an agreement prior to buying a house together,”
            Ardia says.{" "}
          </p>
          <p>
            “It protects yourself, but also shows you really respect the other
            person in the partnership because it protects them as well.” If they
            do decide to meet with an attorney, one thing Jenna and Mike will
            likely need to decide on is the type of tenancy they want to file
            for on the deed. The tenancy outlines the co-ownership agreement and
            what will happen when the property is sold, an interest in the
            property is transferred or sold, or if one of the owners dies.
            “Tenants in Common” allows for different portions of ownership,
            which means the parties can decide to have their respective
            contribution reflected in their percentage of ownership in the
            property.
          </p>
          <p>
            “So if someone brings in 70 percent of the down payment and someone
            brings in 30 percent, proceeds from a post-breakup sale would be
            divided according to the percentage of ownership,” Ardia says.
            “Joint Tenants with the Right of Survivorship” gives each buyer 50%
            ownership, with the other half automatically passing to the second
            owner if the first passes away (learn more about where this comes
            into play with Susan and Bill’s story, below). For Jenna and Mike,
            this would mean that Jenna must split proceeds from a sale equally
            with Mike, despite putting more toward the down payment. Tenants in
            Common might be a better option.
          </p>
          <h5 className='articleHeaders'>
            HOMEBUYING COUPLE NO. 2: TOM + COREY, MISMATCHED INCOMES
          </h5>{" "}
          <p>
            After dating for a more than a year, the couple is ready for a place
            of their own. Tom makes significantly more than Corey, and the pair
            has discussed Tom contributing more to a monthly mortgage payment.
            “Rarely do you have equal income for two partners who decide to buy
            a house together,” Ardia says. “Therefore, one person has been
            contributing a little bit more because their income is higher.” In
            most states, it doesn’t matter how much (or little) each person pays
            toward a monthly mortgage payment. If both parties are named on the
            deed, it’s a 50/50 split if the couple breaks up and sells the
            house.
          </p>
          <p>
            The exception is if they outline different percentages of ownership
            when filing for Tenants in Common. “You need to be careful, or that
            person who may not have contributed as much still walks away with
            half,” Ardia says. Now let’s say the couple decides Tom will buy the
            townhome and the title will be in his name only. If Corey still
            contributes to the monthly mortgage payment, he likely would not be
            entitled to any of the equity he’s paid into the house should he
            decide to move out, the property is sold, the relationship ends or
            Tom dies.
          </p>
          <h5 className='articleHeaders'>
            HOMEBUYING COUPLE NO. 3: SUSAN + BILL, FROM EMPTY NEST TO LOVE NEST
          </h5>
          <p>
            Susan and Bill have been inseparable since they met at his
            retirement party a few years ago. Both divorced, they’re happy to
            spend their golden years in the dream mountain home they just
            purchased – without getting married. “We’ve seen a tremendous
            upswing in older couples who are maybe divorced or widowed and
            really don’t want to get married again,” says Ardia. “They still may
            want to have an agreement in place.” Without a will or pre-written
            agreement – and if the property was deeded as Tenants in Common – if
            Bill were to unexpectedly pass away, his percentage of ownership in
            the home would potentially transfer to his kids.
          </p>
          <p>
            If his children choose to sell the home, Susan could have to move
            out or buy the home from Bill’s heirs. Or worse, let’s say Bill
            doesn’t have kids and his portion of ownership passes to a distant
            relative. Susan’s fate may be up to a long-lost heir she’s never
            met. What both Bill and Susan may want to consult with a lawyer
            about is creating a “Life Estate” for the surviving partner, in the
            case of the passing of the other. This allows the surviving partner
            to stay in the property ‘for life’ or until they choose to move out
            or marry someone else without the burden of anxious heirs wanting to
            sell. Their attorneys would clearly define who is responsible for
            the upkeep, the mortgage payments (if any), taxes, etc.
          </p>
          <p>
            {" "}
            This is where a title deeded Joint Tenancy with a Right to
            Survivorship could apply. It means both Susan and Bill have a 50/50
            stake in the home (including if the couple splits up and decides to
            sell). In the event of Bill’s death, Susan hypothetically inherits
            Bill’s stake in the home and would then have complete ownership.
            There’s a downside to Joint Tenancy with a Right to Survivorship.
            Let’s say Susan and Bill break up, but Bill doesn’t want to sell the
            house. Because both parties still own the house 50/50, they may need
            to work out an arrangement for one party to acquire the other half.
            Both parties would potentially remain liable on any mortgage loan
            until their ownership interest is terminated by a deed. For example,
            if Bill lives in the home but stops paying the mortgage, the lender
            may come after Susan for payments.
          </p>
          <h5 className='articleHeaders'>
            HOMEBUYING COUPLE NO. 4: AMANDA + STEVE, PRE-WEDDING SHOPPERS
          </h5>
          <p>
            <em>
              This engaged couple is eagerly planning their wedding, but they’ve
              found the right house within their budget – complete with{" "}
              <a href='https://news.remax.com/millennial-homebuyers-want-a-yard'>
                the perfect backyard for their dog
              </a>
              . Amanda is a self-employed freelance writer and Steve is a nurse
              at the local children’s hospital.
            </em>
          </p>
          <p>
            <em></em>
          </p>
          <p>
            “Many self-employed people have multiple business and credit
            accounts open and may have a hard time demonstrating their income
            for loan approval. All of their debt may be weighing on the income
            of the other person,” say Mark Phillips, a loan originator with
            Motto Mortgage Alliance in Little Rock, Arkansas. “We might suggest
            that they submit a mortgage application with only one applicant on
            the loan. In many cases it might make qualifying for a loan easier.”{" "}
          </p>
          <p></p>
          <p>
            In addition to looking at a couple’s debt-to-income ratio, some loan
            programs – including many created for first-time homebuyers – have
            income limits. In this case, it may make sense to have one partner
            on the mortgage application and both on the title.{" "}
          </p>
          <p></p>
          <p>
            Phillips uses the example of a couple he recently helped where both
            had great credit scores and good jobs.{" "}
          </p>
          <p></p>
          <p>
            “Putting both of the borrowers on the loan application would have
            disqualified them from the loan program they wanted because adding
            their income together would have put them $30,000 over the max
            income limit,” Phillips says. “The couple decided to remove one of
            them from the loan application, but we did add that person to title.
            They both have ownership in the home – but only one is on the actual
            loan.”
          </p>
          <h3 class='articleHeaders'>All you need is love…and a mortgage?</h3>
          <p>
            Whatever a couple’s reasons for buying a home together may be,
            fortunately there may be a variety of options available when it
            comes to financing as well as options on how to take title to the
            home on the deed.{" "}
          </p>
          <p></p>
          <p>
            “Household dynamics have changed so much in the last 10 to 20
            years,” Phillips says. “People wait to get married or they live
            together before getting married. People are taking different steps
            and doing things in a different order than they traditionally have
            in the past. There is not one way to do a loan. We may be able to
            make all sorts of loan scenarios work. This is great for consumers.”{" "}
          </p>
          <p></p>
          <p>
            Buying a home as a couple can really bring everything to the surface
            in a relationship. Couples will need to have frank discussions about
            debt, income and how much money they’re willing to spend each month.
            Some of these conversations can be difficult or even uncomfortable,
            but according to Shovkat Mamedov, Broker/Owner of RE/MAX 100 in New
            York City, going through the process before getting married can pay
            off.{" "}
          </p>
          <p></p>
          <p>
            “Finances are very important. It can bring down a lot of marriages,”
            Mamedov says. “If a couple can have these serious discussions and
            take on the responsibility of a house together, I think they’ve
            accomplished one of the biggest things in a relationship.”{" "}
          </p>
          <p></p>
          <p>
            And even after navigating legal agreements and the loan process,
            couples who buy a home together may still have to deal with everyday
            challenges of owning a home.
          </p>
          <p></p>
          <p>
            “When you’re renting, you’re not really taking care of all aspects
            of the house,” Mamedov says. “Once you own, you’re responsible for
            everything. That can be something simple or something big like the
            boiler breaking. You’ll see how your partner takes care of the
            house, and you’ll get to know each other better.”{" "}
          </p>
          <p></p>
          <p>
            Once a couple has weighed the pros and cons, and maybe talked to an
            attorney, there’s one person they can count on to help them find a
            home they’ll fall in love with: Their local{" "}
            <a href='http://www.remax.com/'>RE/MAX agent</a>.{" "}
          </p>
          <p></p>
          <p>
            “Couples choose to buy a home at different times in their
            commitment. Of course, we are there to help them at any time,” Ardia
            says.{" "}
          </p>{" "}
          <h6 className='byLine'>
            <em>Written by Stephanie Visscher</em>
          </h6>
        </div>
        <ContactForm listing={listing} placeHolder={"Send us a message"} />
      </div>
    </div>
  );
};

Article1.propTypes = {};

export default Article1;
