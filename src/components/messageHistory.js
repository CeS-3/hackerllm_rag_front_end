export default [
  // {type: 'text', author: `me`, id: 0, data: {text: `Why don't they have salsa on the table?`}},
  // {type: 'text', author: `mattmezza`, id: 1, data: {text: `What do you need salsa for?`}},
  {
    type: 'text',
    author: `support`,
    id: 2,
    data: {text: `I am a hacker mentor.`}
  },
  {
    type: 'text',
    author: `support`,
    id: 3,
    data: {
      text: `You can ask me about effective methods to become a hacker.`
    }
  },
  // {
  //   type: 'text',
  //   author: `mattmezza`,
  //   id: 5,
  //   data: {
  //     text: `Don't you know the difference between seltzer and salsa?? You have the seltezer after the salsa!`
  //   }
  // },
  // {
  //   type: 'text',
  //   author: `me`,
  //   id: 6,
  //   data: {text: `See, this should be a show. This is the show. `}
  // },
  // {type: 'text', author: `mattmezza`, id: 7, data: {text: `What?`}},
  // {type: 'text', author: `me`, id: 8, data: {text: `This. Just talking.`}},
  // {type: 'text', author: `mattmezza`, id: 9, data: {text: `Yeah, right.`}},
  // {
  //   type: 'text',
  //   author: `me`,
  //   id: 10,
  //   data: {text: `I'm really serious. I think that's a good idea. `}
  // },
  // {
  //   type: 'text',
  //   author: `mattmezza`,
  //   id: 11,
  //   data: {text: `Just talking? Well what's the show about?`}
  // },
  // {type: 'text', author: `me`, id: 12, data: {text: `It's about nothing.`}},
  // {type: 'text', author: `mattmezza`, id: 100, data: {text: `No story?`}},
  // {
  //   type: 'system',
  //   id: 13,
  //   data: {text: 'You have been transferred to another operator', meta: '04-07-2018 15:57'}
  // },
  // {
  //   type: 'file',
  //   author: `support`,
  //   id: 14,
  //   data: {
  //     text: `No forget the story. `,
  //     file: {name: 'awesome', url: 'https://media.giphy.com/media/dkGhBWE3SyzXW/giphy.gif'}
  //   }
  // },
  // {
  //   type: 'file',
  //   author: `me`,
  //   id: 15,
  //   data: {
  //     text: `What about this one instead?? `,
  //     file: {
  //       url:
  //         'http://www.quickmeme.com/img/2d/2d95cc80f9a2a2578a8f632eebecddcc1c12e5b08ab85f81a5d401670d5f36c1.jpg'
  //     },
  //     meta: '✓✓ Read'
  //   }
  // },
  // {
  //   type: 'text',
  //   author: `support`,
  //   id: 16,
  //   data: {
  //     text: `You've got to have a story. You've got to have a story. You've got to have a story. You've got to have a story. You've got to have a story. You've got to have a story. `
  //   }
  // },
  // {type: 'emoji', author: `me`, id: 17, data: {emoji: `😋`}},
  // {type: 'text', author: `me`, id: 18, data: {text: `Do you read me...`, meta: '✓✓ Read'}},
  // {type: 'text', author: `me`, id: 19, data: {text: `...or not?`, meta: '✓ Delivered'}},
  // {type: 'system', id: 20, data: {text: 'User changed security key', meta: '04-08-2018 15:57'}},
  {
    type: 'text',
    author: `support`,
    id: 21,
    data: {text: `You can ask me questions like:`},
    suggestions: [
      'How to become a master of web attacks?',
      "Can you tell me the trending research areas right now?",
      'What skills are essential to become an expert hacker?',
      "Which operating system is currently most favored by hackers?"
    ]
  }
]
