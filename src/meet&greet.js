import React from 'react';
import Card from './card'
import CharacterCard from './charactercard'


export default class MeetGreet extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {

    }
  }
  render() {
    return (
        <div className='main-div'>
        <Card 
         title="Meet the Outsiders" 
         subtitle="who, maybe not where, or why... definitely not why." 
         info="On the subject of The Outsiders, we have many questions, the main ones being, who are these people, and what makes them tick? Well, we've gathered a bit of information on each one of them just for you! Now, I'll warn you, some of them were a lot more forthcoming than others, but I did my best to bring you the inside scoop on each of them, at least... what I could get." 
        />

        <CharacterCard 
         name="Alex Drake"
         info="Alex Drake is the proclaimed leader of this rag-tag group of adventures, a bit broody for my taste, but effective and capable, nonetheless. Born in New Ordis, he is native to Ordsia, even owning a home in the town itself. His father being a pretty prominent member of the council or New Ordis means that he inherited his leadership skills honestly, not that we have any doubt... well not that we have that many doubts. While he's certaintly known for his handling of the group, we also know him by his dedication to the latest fashion."
         link="alexDrake"
        />

        <CharacterCard 
         name="Fainne Uron"
         info="Let me just start this by saying, and don't get me wrong, I have met many weird people in my time as a journalist, but my god... what an odd person. Sweet, but a little out there in terms of opinions, and dress. A druid hailing from the Crannach Timberlands, really the only surviving member of the original tribe, Fainne Uron is nothing if not talented. Whether it be changing into different creatures, or summoning the will to rebuild her tribe, Fainne has the gumption and dedication to do it all."
         link="fainneUron"
        />      

        <CharacterCard 
         name="Shinzo Katetsu"
         info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis."
         link="shinzoKatetsu"
        />  

        <CharacterCard 
         name="Geddy&#10;Splintwalker"
         info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis."
         link="geddySplintwalker"
        />

        <CharacterCard 
         name="Hollyanna&#10;Knox"
         info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis."
         link="hollyannaKnox"
        />

        <CharacterCard 
         name="Isa Tenju"
         info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis."
         link="isaTenju"
        />

        <CharacterCard 
         name="Bael Volet"
         info="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Aenean pharetra magna ac placerat vestibulum. Dui accumsan sit amet nulla facilisi morbi tempus iaculis. Adipiscing at in tellus integer. Purus sit amet luctus venenatis. Malesuada bibendum arcu vitae elementum curabitur vitae. Nunc mattis enim ut tellus elementum sagittis. Vulputate mi sit amet mauris commodo quis. Ultrices mi tempus imperdiet nulla malesuada pellentesque elit. Nisi quis eleifend quam adipiscing vitae proin sagittis."
         link="baelVolet"
        />
        </div>
    );
  }
}