import React  from 'react';
import Header from '../organisms/Header/Header';
import Hero from '../atoms/Hero/Hero';
import heroImg from '../../images/fpo-1200x650.png';
import Section from '../molecules/Section/Section';
import CardList from '../molecules/CardList/CardList';
import TextPassage from '../atoms/TextPassage/TextPassage';
import Footer from '../organisms/Footer/Footer';
import Counter from '../molecules/Counter/Counter';
import MyDocument from '../../pages/MyDocument';

const HomeTemplate = () => {
  return (
    <div>
      <Header/>

      <Hero title="This is my hero" description="This is the hero description text" heroimgsrc={heroImg}
        heroimgalt="Alt"/>
      <Section title="Hi I'm a section title" description="This is a description of the section">
        <CardList/>
      </Section>
      <Section title="Hi I'm a section title" description="This is a description of the section">
        <Counter/>
      </Section>
      <MyDocument/>
      <Section title="Hi I'm another section" description="This is a different description">
        <div className="l-linelength-container">
          <TextPassage>
            <p>A text passage contains arbitrary text that might come from a CMS. It should live within
                            a container that caps the line length of the text to avoid a straining reading
                            experience.</p>

            <h2>Heading 2</h2>

            <p>This is another paragraph of text. Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat.</p>

            <ul>
              <li>Here is a unordered list item</li>
              <li>Here is a unordered list item</li>
              <li>Here is a unordered list item</li>
              <li>Here is a unordered list item</li>
            </ul>

            <h3>Heading 3</h3>
            <ol>
              <li>Here is a unordered list item</li>
              <li>Here is a unordered list item</li>
              <li>Here is a unordered list item</li>
              <li>Here is a unordered list item</li>
            </ol>

            <p><a href="#">Lorem ipsum dolor sit amet</a>, consectetur adipiscing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

            <blockquote>
              <p>This is a quotation from something.</p>
              <cite>Cite source</cite>
            </blockquote>

            <p>That is all.</p>
          </TextPassage>
        </div>
        {/* end l-lineLength-container */}
      </Section>
      <Footer/>
    </div>
  );
};
export default HomeTemplate;
