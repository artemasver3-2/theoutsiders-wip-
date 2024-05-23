import React from 'react';
import Card from './card'


export default class Headliner extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {

    }
  }
  render() {
    return (
        <div className='main-div'>
            <Card 
            title="Inside The Outsiders" 
            subtitle="who, what, and why... and when?" 
            info="Ebixia has a new group in town, and they're taking the world by storm. Alex Drake, Geddy Splintwalker, Shinzo Katetsu, Fainne Uron of the Crannach Timberlands, Hollyanna Knox, Empress Isa Tenju, and Bael Volet. Those seven people make up an organization known as The Outsiders, a name that has spread to nearly every corner of Ebixia. But who are these people? Why did they appear? Who do they answer to? Our research took us to the streets of New Ordis. Reportedly, that group arrived on the scene to fight a dragon that slept beneath the city. They fought alongside New Ordis military and were victorious. That really set the team on the map. Their symbol, recognizable to many across the lands, is a dragon to celebrate their victory. Many have said that, since that day, they've appeared in other places across Ebixia to do much of the same. They fought monsters in the streets of Sanctuary and brought war to the shores of Bao. Allegedly, they are responsible for the disappearance of several government officials in the town of Ternathus including Ralion 'Thunderclasp', Millor 'Waterdancer', Drundarr 'Earthbreaker'. Eyewitness reports can confirm they were directly responsible for dethroning Emperor Shenlong Yuya." 
            />

            <Card 
            title="The Outsider Agenda" 
            subtitle="what are they planning?" 
            info="Reports on their mission statement varies. Many report they accept no payment for the work they do. Many others see these deeds as violent displays of power. Several world leaders such as Governor Renault of Northport and King Saxon Ordathe II of Banetrail were positive in their remarks. Queen Ordathe had this to say, 'The Outsiders are noble people. They're the reason we have been able to uplift many of our citizens from poverty.' Deljord's leader, Piranha, had other thoughts. 'They're fine. Arrogant. Well-intentioned.' New Ordis and Ternathus leadership declined giving any statement. The picture that has been painted for *this* reporter is that they call themselves heroes. Works of fiction, come to life, who fight for justice and freedom. They're stationed in the Dewdrop Glade where visitors are welcome to come and request their aid. Their secretary, Eleanor, is available to take your request. This newspaper would like to personally thank Eleanor for her help in publishing this article with her anecdotes and detailed research." 
            />
        </div>
    );
  }
}