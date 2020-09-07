const Discord = require('discord.js');
const client = new Discord.Client();
const token = process.env.token;

client.on('ready', () => {
  console.log('켰다.');
});

client.on('message', (message) => {
  if(message.content === 'ping') {
    message.reply('pong');
  }
});

client.on('message', (message) => {
    if(message.content === '고양이') {
      message.reply('야옹');
    }
  });

  client.on('message', (message) => {
    if(message.content === '강아지') {
      message.reply('멍멍');
    }
  });

  client.on('message', (message) => {
    if(message.content === '호랑이') {
      message.reply('어흥');
    }
  });

  client.on('message', (message) => {
    if(message.content === '도라에몽') {
      message.reply('진구야 일어나');
    }
  });
  client.on('message', (message) => {
    if(message.content === '23월요일1') {
      message.reply('국B');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23월요일2') {
      message.reply('역사');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23월요일3') {
      message.reply('수학');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23월요일4') {
      message.reply('영회');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23월요일5') {
      message.reply('부산의재발견');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23월요일6') {
      message.reply('체육');
    }
  });

  client.on('message', (message) => {
    if(message.content === '블리츠크랭크') {
      message.reply('내그랩은살인이다 - 방성현 ');
    }
  });

  client.on('message', (message) => {
    if(message.content === '퉁퉁이') {
      message.reply('나는야 퉁퉁이 골목 대장이라네');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23화요일1') {
      message.reply('과B');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23화요일2') {
      message.reply('미술');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23화요일3') {
      message.reply('수학');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23화요일4') {
      message.reply('국A');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23화요일5') {
      message.reply('세계사');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23화요일6') {
      message.reply('영어');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23화요일7') {
      message.reply('과A');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23수요일1') {
      message.reply('수학');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23수요일2') {
      message.reply('진코');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23수요일3') {
      message.reply('영어');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23수요일4') {
      message.reply('한문');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23수요일5') {
      message.reply('과B');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23수요일6') {
      message.reply('체육');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23목요일1') {
      message.reply('체육');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23목요일2') {
      message.reply('스포츠클럽');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23목요일3') {
      message.reply('음악');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23목요일4') {
      message.reply('도덕');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23목요일5') {
      message.reply('기B');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23목요일6') {
      message.reply('수학');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23금요일1') {
      message.reply('역사');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23금요일2') {
      message.reply('도덕');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23금요일3') {
      message.reply('국B');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23금요일4') {
      message.reply('기A');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23금요일5') {
      message.reply('국A');
    }
  });

  client.on('message', (message) => {
    if(message.content === '23금요일6') {
      message.reply('과A');
    }
  });

  client.on('message', (message) => {
    if(message.content === '도경이와친구들') {
      message.reply('믹서기에 넣고서 빨간버튼누르면 도경이주스');
    }
  });
client.login(token);