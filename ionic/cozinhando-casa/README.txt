Muitas questões levantadas:

Adequado:
Didática da instrutora.
O conteúdo do curso era muito superficial comparado ao curso de Ionic 3, mas entendi que o propósito era mostrar apenas as novidades, uma vez que o curso mencionado era pré-requisito.
A aula de web component foi interessante, mas não entendi o sentido dela neste curso. No caso de eu ter uma aplicação de outra tecnologia, lá eu poderia reaproveitar telas do Ionic se eu definir web components para as tags padrão do Ionic? Isso poderia ser demonstrado com exemplos. Mas isso tudo não tem a ver com o Ionic em si.

Aceitável:
A transcrição dos vídeos está incorreta e/ou cortada em diversas atividades, só como exemplo, podem ver em:
https://cursos.alura.com.br/course/ionic-4/task/56942
https://cursos.alura.com.br/course/ionic-4/task/56943

Inaceitável:
Curso possui transcrição que é algo extremamente trabalhoso, mas não disponibiliza na primeira aula uma atividade com instruções de instalação das versões corretas das ferramentas necessárias (Ionic 4, versão compatível do NodeJS), ou no mínimo um link para download da versão inicial do projeto (achei alguma coisa em https://github.com/mm44m6/cozinhando-casa), bastando aí "teoricamente" um npm install para baixar tudo.
Digo "teoricamente" porque não foi tão simples. Sinceramente, gastei horas tentando montar o ambiente sozinho seguindo a documentação oficial, fóruns (externos, pois o da Alura também deixa as questões dos alunos às moscas), twitter, blog posts e não tive sucesso.
Restou apenas assistir passivamente os vídeos da instrutora.
Também reclamei no final do curso de Ionic 3 que a parte de desenvolvimento nativo não era possível de ser feita pois a ferramenta utilizada Ionic DevApp foi descontinuada, mas ao menos era possível fazer todo o resto do curso.

Sugestão:
Todos os cursos de Ionic da Alura estão defasados, abandonados e certamente não envelheceram bem, mas ironicamente este que é o mais recente conseguiu ser o pior! Está muito longe da qualidade de outros cursos que já fiz aqui e foram excelentes (Android, Angular, entre outros).
Sugiro a elaboração de um curso de Ionic 5 do zero, sem o pré-requisito dos demais cursos de Ionic hoje existentes.

node --version
nvm list
nvm use 14.10.1
npm --version

npm uninstall -g ionic
npm install -g @ionic/cli

npm install -g ionic@4.0.0-rc.13

npm i

UNMET PEER DEPENDENCY ajv@6.6.2
UNMET PEER DEPENDENCY rxjs@6.3.3

ionic build
ionic serve --lab
npx cap init
npx cap add android
npx cap open android

