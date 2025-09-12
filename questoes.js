const questoes = {
  // ===================================================
  // BLOCO I - LÍNGUA PORTUGUESA
  // ===================================================
  portugues: [
    {
      enunciado: "Qual é o plural de 'cidadão'?",
      alternativas: ["Cidadãos", "Cidadões", "Cidões", "Cidadães"],
      correta: 0,
      explicacao: "A regra geral para palavras terminadas em '-ão' é formar o plural em '-ãos'. 'Cidadão' segue essa regra, assim como 'irmão' (irmãos) e 'mão' (mãos)."
    },
    {
      enunciado: "Assinale a alternativa em que a crase foi empregada corretamente:",
      alternativas: [
        "Ele se referiu a mesma pessoa de ontem.",
        "Chegamos à tempo para o início da audiência.",
        "Agradeço à Vossa Excelência pela atenção.",
        "Fui àquela cidade para resolver um problema."
      ],
      correta: 3,
      explicacao: "Usa-se crase antes de pronomes demonstrativos como 'aquele', 'aquela', 'aquilo'. O verbo 'ir' exige a preposição 'a', resultando na fusão: Fui a + aquela = Fui àquela."
    },
    // ... [outras questões que você já tinha] ...
    {
      enunciado: "O verbo destacado foi flexionado corretamente em:",
      alternativas: ["Se ele ver o erro, certamente o corrigirá.", "O juiz interveio na discussão acalorada.", "Quando eu reaver o processo, darei andamento.", "Eles se manteram calados durante a oitiva."],
      correta: 1,
      explicacao: "O verbo 'intervir' é derivado de 'vir', e conjuga-se como ele. No pretérito perfeito, 'ele veio', logo 'ele interveio'. As outras formas corretas seriam: 'vir' (A), 'reouver' (C) e 'mantiveram' (D)."
    },
    // =========== NOVAS QUESTÕES DE PORTUGUÊS ===========
    {
      enunciado: "A regência do verbo 'assistir' está de acordo com a norma-padrão em:",
      alternativas: ["O médico assistiu o paciente com dedicação.", "Nós assistimos o filme ontem à noite.", "A comunidade assiste àquela região com doações.", "O advogado assiste ao réu em todas as fases."],
      correta: 0,
      explicacao: "O verbo 'assistir' no sentido de 'ajudar, prestar assistência' é transitivo direto (não exige preposição). No sentido de 'ver, presenciar', ele é transitivo indireto e exige a preposição 'a' (assistimos AO filme)."
    },
    {
      enunciado: "Assinale a alternativa em que a concordância verbal está INCORRETA.",
      alternativas: ["Mais de um servidor se atrasaram para a reunião.", "Fui eu que resolvi o problema.", "Alugam-se salas comerciais neste prédio.", "Os Estados Unidos são uma potência mundial."],
      correta: 0,
      explicacao: "Quando o sujeito é a expressão 'mais de um', o verbo fica no singular. O correto seria 'Mais de um servidor se atrasou'."
    },
    {
      enunciado: "Na frase 'Apesar da chuva, ele foi trabalhar', a oração expressa uma relação de:",
      alternativas: ["Causa", "Condição", "Concessão", "Finalidade"],
      correta: 2,
      explicacao: "A locução 'Apesar de' introduz uma ideia de concessão, que é um obstáculo que não impede a ação principal de ocorrer."
    }
  ],

  // ===================================================
  // BLOCO II - DIREITO
  // ===================================================
  direito_penal: [
    {
      enunciado: "O funcionário público que exige, para si ou para outrem, vantagem indevida em razão da função, comete o crime de:",
      alternativas: ["Corrupção passiva", "Concussão", "Peculato", "Prevaricação"],
      correta: 1,
      explicacao: "O verbo chave do crime de Concussão (Art. 316, CP) é 'EXIGIR'. Se o funcionário apenas 'solicitar' ou 'receber', seria Corrupção Passiva."
    },
    // ... [outras questões que você já tinha] ...
    {
      enunciado: "Retardar ou deixar de praticar, indevidamente, ato de ofício, para satisfazer interesse pessoal, é a conduta do crime de:",
      alternativas: ["Desacato", "Desobediência", "Corrupção Passiva", "Prevaricação"],
      correta: 3,
      explicacao: "A definição corresponde ao crime de Prevaricação (Art. 319, CP). O elemento subjetivo específico é a 'satisfação de interesse ou sentimento pessoal'."
    },
    // =========== NOVAS QUESTÕES DE DIREITO PENAL ===========
    {
      enunciado: "O particular que oferece ou promete vantagem indevida a funcionário público, para determiná-lo a praticar, omitir ou retardar ato de ofício, comete o crime de:",
      alternativas: ["Tráfico de influência", "Corrupção ativa", "Corrupção passiva", "Concussão"],
      correta: 1,
      explicacao: "Esta é a definição do crime de Corrupção Ativa (Art. 333, CP), praticado pelo particular contra a administração pública. A Corrupção Passiva é praticada pelo funcionário que solicita ou recebe a vantagem."
    },
    {
      enunciado: "Inserir ou facilitar, o funcionário autorizado, a inserção de dados falsos nos sistemas informatizados da Administração Pública com o fim de obter vantagem indevida para si ou para outrem, configura qual crime?",
      alternativas: ["Peculato mediante erro de outrem", "Inserção de dados falsos em sistema de informações", "Falsidade ideológica", "Estelionato"],
      correta: 1,
      explicacao: "Trata-se do crime específico previsto no Art. 313-A do Código Penal, que visa proteger a segurança e a veracidade dos sistemas de informação da Administração Pública."
    },
    {
      enunciado: "Para os efeitos penais, considera-se funcionário público:",
      alternativas: ["Apenas quem exerce cargo, emprego ou função pública mediante concurso.", "Quem exerce cargo, emprego ou função pública, ainda que transitoriamente ou sem remuneração.", "Apenas os empregados de empresas públicas e sociedades de economia mista.", "Somente quem possui estabilidade no serviço público."],
      correta: 1,
      explicacao: "O Art. 327 do Código Penal adota um conceito amplo de funcionário público para fins penais, abrangendo qualquer pessoa que exerça função pública, mesmo que de forma temporária e sem receber pagamento por isso."
    }
  ],
  direito_processual_penal: [
    {
      enunciado: "De acordo com o Código de Processo Penal, o inquérito policial deverá terminar no prazo de:",
      alternativas: ["10 dias, se o indiciado estiver preso, ou 30 dias, quando solto.", "15 dias em qualquer situação.", "5 dias, se o indiciado estiver preso, ou 15 dias, quando solto.", "30 dias, independentemente de o indiciado estar preso ou solto."],
      correta: 0,
      explicacao: "O Art. 10 do CPP estabelece o prazo de 10 dias para conclusão do inquérito se o indiciado estiver preso, e de 30 dias, se estiver solto."
    },
    // ... [outras questões que você já tinha] ...
    {
      enunciado: "A citação do militar far-se-á:",
      alternativas: ["Por edital, em qualquer hipótese.", "Por mandado, entregue ao chefe da repartição em que servir.", "Pelo correio, no endereço de sua residência.", "Sempre na pessoa de seu advogado constituído."],
      correta: 1,
      explicacao: "O Art. 358 do CPP estabelece uma regra especial para a citação do militar, que será feita por intermédio do chefe do respectivo serviço, para garantir que o ato chegue ao conhecimento do citando."
    },
    // =========== NOVAS QUESTÕES DE DIREITO PROCESSUAL PENAL ===========
    {
      enunciado: "No Processo Penal, a exceção de suspeição do juiz precede a qualquer outra, salvo:",
      alternativas: ["A de incompetência do juízo.", "A de litispendência.", "A de ilegitimidade de parte.", "A de coisa julgada."],
      correta: 0,
      explicacao: "Conforme o Art. 111 do CPP, as exceções seguirão a ordem: suspeição, incompetência, litispendência, ilegitimidade e coisa julgada. No entanto, o próprio código, no Art. 108, diz que a exceção de incompetência pode ser arguida a qualquer tempo, tendo uma natureza prioritária."
    },
    {
      enunciado: "Qual das seguintes provas é considerada ilícita, devendo ser desentranhada do processo?",
      alternativas: ["A confissão do réu obtida mediante tortura.", "O depoimento de uma testemunha que ouviu dizer sobre o crime.", "Um documento juntado fora do prazo legal.", "A perícia realizada por um único perito oficial."],
      correta: 0,
      explicacao: "Provas obtidas com violação a normas constitucionais ou legais são ilícitas (Art. 157 do CPP). A tortura viola a dignidade da pessoa humana, tornando a confissão imprestável."
    },
    {
      enunciado: "O ofendido, ou seu representante legal, decairá no direito de queixa ou de representação, se não o exercer dentro do prazo de:",
      alternativas: ["3 meses, a contar da data do fato.", "1 ano, a contar do conhecimento da autoria.", "6 meses, a contar do dia em que vier a saber quem é o autor do crime.", "30 dias, a contar da data do crime."],
      correta: 2,
      explicacao: "O Art. 38 do CPP estabelece o prazo decadencial de 6 meses para o exercício do direito de queixa (ação penal privada) ou de representação (ação penal pública condicionada), contado do dia em que a vítima sabe quem foi o autor do crime."
    }
  ],
  direito_processual_civil: [
    {
      enunciado: "Qual o prazo regra para a interposição do recurso de apelação, segundo o Código de Processo Civil?",
      alternativas: ["15 dias úteis", "10 dias corridos", "30 dias úteis", "5 dias corridos"],
      correta: 0,
      explicacao: "Conforme o Art. 1.003, § 5º, do Código de Processo Civil, o prazo para interpor a maioria dos recursos, incluindo a apelação, e para respondê-los é de 15 dias úteis."
    },
    // ... [outras questões que você já tinha] ...
    {
      enunciado: "Conforme o CPC, o réu poderá oferecer contestação, por petição, no prazo de:",
      alternativas: ["10 dias", "15 dias", "20 dias", "30 dias"],
      correta: 1,
      explicacao: "O prazo para o réu apresentar sua defesa (contestação) é de 15 dias úteis, de acordo com o Art. 335 do CPC. O início da contagem do prazo varia conforme a forma da citação."
    },
    // =========== NOVAS QUESTÕES DE DIREITO PROCESSUAL CIVIL ===========
    {
      enunciado: "O juiz NÃO resolverá o mérito quando:",
      alternativas: ["Decidir sobre a ocorrência de decadência ou prescrição.", "Homologar a renúncia à pretensão formulada na ação.", "Acolher a alegação de perempção, litispendência ou de coisa julgada.", "Julgar procedente o pedido formulado na ação principal."],
      correta: 2,
      explicacao: "Perempção, litispendência e coisa julgada são pressupostos processuais negativos que impedem a análise do mérito da causa, levando à extinção do processo sem resolução de mérito, conforme o Art. 485 do CPC. As outras opções são hipóteses de resolução de mérito (Art. 487)."
    },
    {
      enunciado: "A comunicação de um ato processual que se destina a dar ciência da sentença a uma das partes é denominada:",
      alternativas: ["Citação", "Intimação", "Notificação", "Conclusão"],
      correta: 1,
      explicacao: "Intimação é o ato pelo qual se dá ciência a alguém dos atos e dos termos do processo (Art. 269, CPC). A citação é para chamar o réu a se defender. Notificação é mais comum no processo penal. Conclusão é o ato de enviar os autos ao juiz."
    },
    {
      enunciado: "No âmbito dos Juizados Especiais Cíveis (Lei 9.099/95), não se admitirá a intervenção de terceiros nem a assistência, mas se admite:",
      alternativas: ["A reconvenção.", "O recurso especial.", "A ação declaratória incidental.", "O litisconsórcio."],
      correta: 3,
      explicacao: "O Art. 10 da Lei 9.099/95 veda a intervenção de terceiros e a assistência. No entanto, o litisconsórcio (pluralidade de autores ou réus) é permitido, pois não se trata de uma forma de intervenção, mas de uma formação inicial do processo."
    }
  ],
  direito_constitucional: [
    {
      enunciado: "Conforme o Art. 37 da CF, a investidura em cargo ou emprego público depende de aprovação prévia em concurso público, ressalvadas:",
      alternativas: ["As nomeações para qualquer cargo em comissão.", "As nomeações para cargo em comissão, declarados em lei de livre nomeação e exoneração.", "Os cargos de natureza técnica que exijam notório saber.", "As contratações temporárias para cargos de direção."],
      correta: 1,
      explicacao: "O Art. 37, II, da CF estabelece a regra do concurso público, mas excetua 'as nomeações para cargo em comissão declarado em lei de livre nomeação e exoneração', que são as funções de confiança."
    },
    // ... [outras questões que você já tinha] ...
    {
      enunciado: "Assinale a alternativa que descreve um direito social, nos termos do Art. 6º da Constituição Federal.",
      alternativas: ["Livre manifestação do pensamento.", "Inviolabilidade da vida privada.", "Moradia.", "Liberdade de associação para fins lícitos."],
      correta: 2,
      explicacao: "O Art. 6º da CF elenca os direitos sociais, que incluem educação, saúde, alimentação, trabalho, moradia, transporte, lazer, segurança, previdência social, etc. Os demais são direitos individuais previstos no Art. 5º."
    },
    // =========== NOVAS QUESTÕES DE DIREITO CONSTITUCIONAL ===========
    {
      enunciado: "De acordo com a CF, é vedada a cassação de direitos políticos, cuja perda ou suspensão só se dará nos casos de:",
      alternativas: ["Sentença penal condenatória transitada em julgado.", "Recusa de cumprir obrigação a todos imposta, exclusivamente.", "Dívida fiscal com a União.", "Cancelamento da naturalização por qualquer motivo."],
      correta: 0,
      explicacao: "O Art. 15 da CF lista os casos de perda ou suspensão dos direitos políticos. Um dos principais é a 'condenação criminal transitada em julgado, enquanto durarem seus efeitos'."
    },
    {
      enunciado: "O remédio constitucional cabível para proteger direito líquido e certo, não amparado por habeas corpus ou habeas data, quando o responsável pela ilegalidade for autoridade pública, é o:",
      alternativas: ["Mandado de Segurança", "Mandado de Injunção", "Ação Popular", "Ação Civil Pública"],
      correta: 0,
      explicacao: "Esta é a definição clássica do Mandado de Segurança, previsto no Art. 5º, LXIX, da CF. É uma ação residual para proteger direitos que não são de locomoção (HC) nem de informação pessoal (HD)."
    },
    {
      enunciado: "O prazo de validade do concurso público será de até:",
      alternativas: ["Um ano, prorrogável uma vez, por igual período.", "Dois anos, improrrogável.", "Quatro anos, prorrogável uma vez, por igual período.", "Dois anos, prorrogável uma vez, por igual período."],
      correta: 3,
      explicacao: "Conforme o Art. 37, III, da CF, o prazo de validade do concurso público será de até dois anos, permitida uma única prorrogação por igual período."
    }
  ],
  direito_administrativo: [
    {
      enunciado: "O atributo do ato administrativo que impõe a coercibilidade de seu cumprimento é a:",
      alternativas: ["Presunção de legitimidade", "Autoexecutoriedade", "Tipicidade", "Imperatividade"],
      correta: 1,
      explicacao: "A autoexecutoriedade é o atributo que permite à Administração executar suas próprias decisões, sem precisar de autorização prévia do Poder Judiciário, inclusive com o uso de meios de coação direta."
    },
    // ... [outras questões que você já tinha] ...
    {
      enunciado: "Um servidor público que utiliza materiais da repartição para realizar um trabalho particular comete um ato de improbidade que gera:",
      alternativas: ["Enriquecimento ilícito.", "Prejuízo ao erário.", "Atentado contra os princípios da administração.", "Concessão indevida de benefício fiscal."],
      correta: 1,
      explicacao: "O uso de bens públicos em proveito particular, mesmo que não gere enriquecimento para o agente, causa um dano (prejuízo) ao patrimônio público. A conduta se enquadra no Art. 10 da Lei de Improbidade Administrativa."
    },
    // =========== NOVAS QUESTÕES DE DIREITO ADMINISTRATIVO ===========
    {
      enunciado: "A anulação de um ato administrativo produz efeitos:",
      alternativas: ["Ex nunc, ou seja, a partir da data da anulação.", "Ex tunc, ou seja, retroativos à data da prática do ato.", "Apenas para o futuro, respeitando os atos já consumados.", "A critério da autoridade que anula o ato."],
      correta: 1,
      explicacao: "A anulação ocorre por ilegalidade, portanto, o ato nunca deveria ter existido. Seus efeitos são 'ex tunc', retroagindo para desfazer as consequências desde sua origem. A revogação, por conveniência, tem efeitos 'ex nunc' (não retroativos)."
    },
    {
      enunciado: "O poder da Administração Pública de apurar infrações e aplicar penalidades aos servidores públicos e demais pessoas sujeitas à disciplina administrativa é o Poder:",
      alternativas: ["Disciplinar", "Regulamentar", "de Polícia", "Hierárquico"],
      correta: 0,
      explicacao: "O Poder Disciplinar é o que confere à Administração a prerrogativa de punir internamente as infrações funcionais de seus servidores e de particulares com vínculo específico com a Administração."
    },
    {
      enunciado: "Nos termos da Lei nº 8.429/92 (Improbidade Administrativa), a aplicação das sanções de suspensão dos direitos políticos e perda da função pública depende de:",
      alternativas: ["Decisão do superior hierárquico.", "Julgamento em processo administrativo disciplinar.", "Trânsito em julgado da sentença condenatória.", "Aprovação pelo Tribunal de Contas."],
      correta: 2,
      explicacao: "Com as recentes alterações na Lei de Improbidade, ficou estabelecido que sanções graves como a perda da função pública e a suspensão dos direitos políticos só podem ser efetivadas após o trânsito em julgado da sentença condenatória."
    }
  ],
  normas_da_corregedoria: [
    {
      enunciado: "Incumbe ao Escrivão Judicial, de acordo com as Normas da CGJ-SP:",
      alternativas: ["Proferir decisões interlocutórias.", "Realizar audiências na ausência do juiz.", "Abrir conclusão dos autos ao juiz no prazo de 1 dia.", "Aconselhar as partes sobre o mérito."],
      correta: 2,
      explicacao: "É uma das principais incumbências do diretor de ofício (escrivão). Após a juntada de petições, os autos devem ser encaminhados (feitos conclusos) ao juiz para despacho, decisão ou sentença no prazo de 1 dia."
    },
    // ... [outras questões que você já tinha] ...
    {
      enunciado: "Segundo as Normas da Corregedoria, é vedado ao servidor lançar nos autos cotas:",
      alternativas: ["Certificando o decurso de um prazo.", "Interlineares ou marginais.", "Informando a conclusão dos autos ao juiz.", "Indicando o número de folhas do processo."],
      correta: 1,
      explicacao: "As Normas proíbem expressamente que os servidores façam anotações nas margens ou entrelinhas dos autos. Qualquer observação ou informação necessária deve ser feita por meio de uma certidão formal."
    },
    // =========== NOVAS QUESTÕES DE NORMAS DA CORREGEDORIA ===========
    {
      enunciado: "Os mandados, em regra, serão expedidos e assinados:",
      alternativas: ["Exclusivamente pelo Juiz.", "Pelo servidor, com a rubrica do Juiz.", "Eletronicamente pelo Escrivão Judicial, que os assinará digitalmente.", "Pelo Oficial de Justiça que irá cumpri-lo."],
      correta: 2,
      explicacao: "Com o processo eletrônico, as Normas da CGJ estabelecem que a maioria dos mandados será expedida pelo sistema e assinada digitalmente pelo Escrivão (Diretor de Cartório), agilizando o procedimento."
    },
    {
      enunciado: "A movimentação de processos para a publicação no Diário de Justiça Eletrônico (DJE) deverá ocorrer no prazo máximo de:",
      alternativas: ["24 horas", "48 horas", "3 dias", "5 dias"],
      correta: 2,
      explicacao: "As Normas da CGJ são rigorosas com os prazos. Os atos que dependem de publicação devem ser encaminhados ao DJE em no máximo 3 dias para garantir a celeridade processual."
    },
    {
      enunciado: "A consulta aos autos de processos que tramitam em segredo de justiça é permitida:",
      alternativas: ["A qualquer pessoa, desde que não retire os autos de cartório.", "Apenas às partes e a seus procuradores.", "A estagiários de direito, mesmo sem procuração.", "Apenas aos servidores da unidade judicial."],
      correta: 1,
      explicacao: "O segredo de justiça é uma exceção à regra da publicidade. O acesso aos autos fica restrito às partes envolvidas, seus advogados, defensores públicos e membros do Ministério Público."
    }
  ],

  // ===================================================
  // BLOCO III - CONHECIMENTOS GERAIS
  // ===================================================
  matematica: [
    {
      enunciado: "Um produto que custava R$ 80,00 teve um aumento de 10%. Qual o novo preço?",
      alternativas: ["R$ 88,00", "R$ 90,00", "R$ 85,00", "R$ 81,00"],
      correta: 0,
      explicacao: "10% de 80 é 8. O novo preço é o preço antigo mais o aumento: R$ 80,00 + R$ 8,00 = R$ 88,00."
    },
    // ... [outras questões que você já tinha] ...
    {
      enunciado: "A razão entre o número de servidores homens e mulheres em um cartório é de 3 para 5. Se há um total de 40 servidores, quantas são as mulheres?",
      alternativas: ["15", "20", "25", "30"],
      correta: 2,
      explicacao: "A proporção total é 3 + 5 = 8 partes. Dividimos o total de servidores pelo total de partes: 40 / 8 = 5. Cada parte equivale a 5 servidores. Como as mulheres correspondem a 5 partes, o total de mulheres é 5 * 5 = 25."
    },
    // =========== NOVAS QUESTÕES DE MATEMÁTICA ===========
    {
      enunciado: "Um processo que tinha 200 páginas teve 30% de suas páginas digitalizadas. Quantas páginas ainda faltam para digitalizar?",
      alternativas: ["60", "70", "140", "170"],
      correta: 2,
      explicacao: "Foram digitalizadas 30% de 200, ou seja, 0,30 * 200 = 60 páginas. Faltam digitalizar 200 - 60 = 140 páginas."
    },
    {
      enunciado: "Se 4 servidores arquivam 120 processos em 3 dias, quantos dias 6 servidores levarão para arquivar 240 processos?",
      alternativas: ["2 dias", "4 dias", "6 dias", "8 dias"],
      correta: 1,
      explicacao: "Regra de três composta. Dias é inversamente proporcional a servidores e diretamente proporcional a processos. Equação: (3/x) = (6/4) * (120/240). (3/x) = (3/2) * (1/2) => 3/x = 3/4 => x = 4 dias."
    },
    {
      enunciado: "O perímetro de um terreno retangular é de 60 metros. Se o comprimento é o dobro da largura, qual é a área do terreno?",
      alternativas: ["150 m²", "200 m²", "225 m²", "250 m²"],
      correta: 1,
      explicacao: "Perímetro = 2*(L+C). Sabemos que C=2L. Então 60 = 2*(L+2L) => 60 = 2*(3L) => 60 = 6L => L=10m. Se L=10m, C=20m. A área é L*C = 10*20 = 200 m²."
    }
  ],
  informatica: [
    {
      enunciado: "Qual é o atalho de teclado para 'Salvar como' na maioria dos programas do Microsoft Office?",
      alternativas: ["Ctrl + S", "Ctrl + B", "F12", "Alt + S"],
      correta: 2,
      explicacao: "A tecla F12 é o atalho universal no pacote Office para abrir a caixa de diálogo 'Salvar como'. Ctrl + S apenas salva as alterações no arquivo já existente."
    },
    // ... [outras questões que você já tinha] ...
    {
      enunciado: "No Microsoft Excel, para congelar a linha superior de uma planilha você deve usar a opção:",
      alternativas: ["Exibir > Congelar Painéis > Congelar Linha Superior", "Dados > Congelar > Linha Superior", "Exibir > Layout da Página > Congelar", "Formatar > Congelar Linha"],
      correta: 0,
      explicacao: "A funcionalidade de congelar painéis, que permite manter linhas ou colunas visíveis, está localizada na guia 'Exibir' do Excel."
    },
    // =========== NOVAS QUESTÕES DE INFORMÁTICA ===========
    {
      enunciado: "No Microsoft Word, a combinação das teclas CTRL + SHIFT + C é usada para:",
      alternativas: ["Copiar o texto como imagem.", "Colar especial.", "Copiar a formatação de um texto.", "Criar um comentário."],
      correta: 2,
      explicacao: "Enquanto CTRL+C copia o texto, a adição da tecla SHIFT (CTRL+SHIFT+C) copia apenas a formatação (fonte, cor, tamanho, etc.), que pode ser aplicada a outro texto com CTRL+SHIFT+V."
    },
    {
      enunciado: "Qual das seguintes funções do Microsoft Excel é usada para procurar um valor na primeira coluna de uma tabela e retornar um valor na mesma linha de uma coluna especificada?",
      alternativas: ["=SOMA()", "=SE()", "=CONT.VALORES()", "=PROCV()"],
      correta: 3,
      explicacao: "A função PROCV (Procura Vertical) é fundamental no Excel para buscar dados em tabelas. Ela procura um valor verticalmente na primeira coluna e retorna um dado correspondente de outra coluna na mesma linha."
    },
    {
      enunciado: "Um ataque cibernético que tenta enganar um usuário para que ele revele informações confidenciais (como senhas ou dados de cartão de crédito) através de e-mails falsos é conhecido como:",
      alternativas: ["Ransomware", "Spyware", "Phishing", "Firewall"],
      correta: 2,
      explicacao: "Phishing (pescaria) é uma técnica de engenharia social que usa e-mails, mensagens e sites falsos para 'pescar' informações sensíveis das vítimas, geralmente se passando por uma instituição confiável."
    }
  ],
  raciocinio_logico: [
    {
      enunciado: "Todo escrevente é dedicado. João é escrevente. Logo:",
      alternativas: ["João não é dedicado.", "Todo dedicado é escrevente.", "João é dedicado.", "Alguns escreventes não são dedicados."],
      correta: 2,
      explicacao: "Isso é um silogismo categórico clássico. Se a premissa maior afirma que TODOS do grupo A possuem a característica B, e a premissa menor afirma que um indivíduo pertence ao grupo A, a conclusão lógica é que esse indivíduo possui a característica B."
    },
    // ... [outras questões que você já tinha] ...
    {
      enunciado: "Considere a proposição 'Ana é escrevente ou Bruno é oficial'. A negação dessa proposição é:",
      alternativas: ["Se Ana não é escrevente, então Bruno não é oficial.", "Ana não é escrevente e Bruno não é oficial.", "Ana é escrevente e Bruno não é oficial.", "Ana não é escrevente ou Bruno não é oficial."],
      correta: 1,
      explicacao: "Pelas Leis de De Morgan, a negação de uma disjunção (P ou Q) é a conjunção das negações (~P e ~Q). Nega-se a primeira parte, troca-se 'ou' por 'e', e nega-se a segunda parte."
    },
    // =========== NOVAS QUESTÕES DE RACIOCÍNIO LÓGICO ===========
    {
      enunciado: "Se chove, então o pátio molha. O pátio não molhou. Logo:",
      alternativas: ["Choveu.", "Não choveu.", "Pode ter chovido.", "O pátio está coberto."],
      correta: 1,
      explicacao: "Este é um exemplo clássico do argumento lógico válido chamado Modus Tollens. Se a consequência ('o pátio molha') é negada, a causa ('chove') também deve ser negada. Se P -> Q, e temos ~Q, então concluímos ~P."
    },
    {
      enunciado: "A negação da proposição 'Algum servidor não é concursado' é:",
      alternativas: ["Nenhum servidor é concursado.", "Todo servidor é concursado.", "Algum servidor é concursado.", "Nem todo servidor é concursado."],
      correta: 1,
      explicacao: "A negação de uma proposição particular negativa ('Algum A não é B') é uma proposição universal afirmativa ('Todo A é B')."
    },
    {
      enunciado: "Qual das seguintes proposições é uma contradição?",
      alternativas: ["Se o processo é urgente, ele é urgente.", "O processo é físico ou não é físico.", "O processo é urgente e não é urgente.", "O processo é físico e digital."],
      correta: 2,
      explicacao: "Uma contradição é uma proposição que é sempre falsa, independentemente dos valores lógicos de seus componentes. A forma 'P e não P' (afirmar e negar a mesma coisa simultaneamente) é a estrutura de uma contradição."
    }
  ],
  // =========== NOVA MATÉRIA: ATUALIDADES ===========
  atualidades: [
    {
      enunciado: "Em 2025, o Brasil assume a presidência de qual importante bloco econômico e político, com a cúpula prevista para ocorrer no Rio de Janeiro?",
      alternativas: ["União Europeia", "G20", "BRICS", "Mercosul"],
      correta: 1,
      explicacao: "O Brasil assumiu a presidência do G20, grupo que reúne as 19 maiores economias do mundo mais a União Africana e a União Europeia. A liderança brasileira tem focado em temas como o combate à fome, desenvolvimento sustentável e reforma da governança global."
    },
    {
      enunciado: "A Reforma Tributária sobre o consumo, promulgada no final de 2023 e em fase de regulamentação em 2024/2025, visa unificar diversos impostos em um modelo de Imposto sobre Valor Agregado (IVA). Quais são os dois principais tributos que comporão o IVA Dual?",
      alternativas: ["IR e IOF", "PIS e COFINS", "IPI e ICMS", "CBS e IBS"],
      correta: 3,
      explicacao: "A Reforma Tributária cria o IVA Dual, composto pela Contribuição sobre Bens e Serviços (CBS), de competência federal, e pelo Imposto sobre Bens e Serviços (IBS), de competência compartilhada entre estados e municípios."
    },
    {
      enunciado: "Qual tecnologia emergente tem sido pauta de intensos debates globais sobre regulação, ética e seu impacto no mercado de trabalho e na disseminação de informações, sendo um tema central em fóruns como o Fórum Econômico Mundial de 2025?",
      alternativas: ["Computação em nuvem", "Internet das Coisas (IoT)", "Inteligência Artificial (IA) Generativa", "Blockchain"],
      correta: 2,
      explicacao: "A Inteligência Artificial Generativa, popularizada por ferramentas como o ChatGPT e geradores de imagem, dominou as discussões globais devido ao seu potencial disruptivo e aos desafios éticos e de regulamentação que apresenta."
    },
    {
      enunciado: "Qual questão ambiental tem colocado o Brasil em destaque nas negociações climáticas internacionais, especialmente após a retomada de políticas de fiscalização e metas ambiciosas de redução de desmatamento apresentadas em conferências como a COP?",
      alternativas: ["Derretimento de geleiras", "Desertificação do sertão nordestino", "Poluição dos rios urbanos", "Proteção da Floresta Amazônica"],
      correta: 3,
      explicacao: "A Amazônia é central para o equilíbrio climático global e para a imagem internacional do Brasil. A política de combate ao desmatamento e de desenvolvimento sustentável para a região é o principal tema ambiental do país no cenário mundial."
    },
    {
      enunciado: "O conflito que se intensificou em 2022 e continua a gerar graves consequências geopolíticas e humanitárias em 2025 envolve principalmente a invasão de qual país pela Rússia?",
      alternativas: ["Polônia", "Ucrânia", "Finlândia", "Geórgia"],
      correta: 1,
      explicacao: "A guerra na Ucrânia, iniciada pela invasão russa em fevereiro de 2022, continua a ser um dos principais focos de tensão geopolítica global, com impactos na segurança energética, alimentar e nas relações entre as grandes potências."
    }
  ]
};