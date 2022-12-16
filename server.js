
const express = require('express')
const app = express()

app.get('/', (req, res) => {
    const rappers = [
      {
      name: 'Kanye West',
      style: 'Hip-hop/Rap',
      albums: ['The College Dropout', 'Late Registration', 'Graduation', 'My Beautiful Dark Twisted Fantasy', 'Yeezus'],
      topSongs: ['Ultralight Beam', 'Power', 'Touch the Sky', 'Gold Digger', 'Stronger']
    },
    {
      name: '21 Savage',
      style: 'Hip-hop/Trap',
      albums: ['Savage Mode', 'Savage Mode II', 'I Am > I Was', 'Free 21 Savage'],
      topSongs: ['X', 'Savage', 'Bank Account', 'Rockstar', '1.5']
    },
    {
      name: 'Drake',
      style: 'Hip-hop/Rap',
      albums: ['Thank Me Later', 'Take Care', 'Nothing Was the Same', 'Views', 'Scorpion'],
      topSongs: ['One Dance', 'Hotline Bling', 'God"s plan', 'In My Feelings', 'Started from the Bottom']
    },
    {
      name: 'Kendrick Lamar',
      style: 'Hip-hop/Rap',
      albums: ['Section.80', 'Good Kid, m.A.A.d City', 'To Pimp a Butterfly', 'DAMN.', 'Black Panther: The Album'],
      topSongs: ['HUMBLE.', 'King Kunta', 'DNA.', 'i', 'Alright']
    },
    {
      name: 'Future',
      style: 'Hip-hop/Rap',
      albums: ['Section.80', 'Good Kid, m.A.A.d City', 'To Pimp a Butterfly', 'DAMN.', 'Black Panther: The Album'],
      topSongs: ['HUMBLE.', 'King Kunta', 'DNA.', 'i', 'Alright']
    },
    {
      name: 'Lil Wayne',
      style: 'Hip-hop/Rap',
      albums: ['Tha Carter', 'Tha Carter II', 'Tha Carter III', 'Tha Carter IV', 'I Am Not a Human Being'],
      topSongs: ['A Milli', 'Lollipop', '6 Foot 7 Foot', 'How to Love', 'Love Me']
    },
    {
      name: 'Eminem',
      style: 'Hip-hop/Rap',
      albums: ['The Slim Shady LP', 'The Marshall Mathers LP', 'The Eminem Show', 'Encore', 'Relapse'],
      topSongs: ['Lose Yourself', 'Not Afraid', 'The Real Slim Shady', 'Stan', 'Love the Way You Lie']
    },
    {
      name: 'J. Cole',
      style: 'Hip-hop/Rap',
      albums: ['Cole World: The Sideline Story', 'Born Sinner', '2014 Forest Hills Drive', '4 Your Eyez Only', 'KOD'],
      topSongs: ['No Role Modelz', 'Middle Child', 'ATM', 'Kevin’$ node -vs Heart', '4 Your Eyez Only']
    },
    {
      name: 'Lil Uzi Vert',
      style: 'Hip-hop/Rap',
      albums: ['Luv Is Rage', 'Luv Is Rage 2', 'Eternal Atake'],
      topSongs: ['XO Tour Llif3', 'Money Longer', 'The Way Life Goes', 'Sauce It Up', 'New Patek']
    },
    {
      name: 'Lil Baby',
      style: 'Hip-hop/Rap',
      albums: ['Harder Than Ever', 'Street Gossip', 'My Turn'],
      topSongs: ['Woah', 'Sum 2 Prove', 'Close Friends', 'Freestyle', 'Emotionally Scarred']
    },
    {
      name: 'Lil Yachty',
      style: 'Hip-hop/Rap',
      albums: ['Teenage Emotions', 'Lil Boat', 'Lil Boat 2', 'Nuthin 2 Prove'],
      topSongs: ['1 Night', 'Minnesota', 'Bring It Back', 'Peek A Boo', 'Forever Young']
    },
    {
      name: 'Lil Durk',
      style: 'Hip-hop/Rap',
      albums: ['Signed to the Streets', 'Remember My Name', 'Love Songs for the Streets', 'Just Cause Y’all Waited 2'],
      topSongs: ['Like Me', 'My Beyonce', 'Dis Ain’t What You Want', 'No Auto Durk', 'No Fear']
    },
  {
      name: 'Lil Skies',
      style: 'Hip-hop/Rap',
      albums: ['Life of a Dark Rose', 'Shelby'],
      topSongs: ['Red Roses', 'Nowadays', 'Creeping', 'I', 'Lust']
    }
    ]
  

  res.json(rappers)
})

app.listen(3000, () => {
  console.log('Rapper API running on port 3000')
})
