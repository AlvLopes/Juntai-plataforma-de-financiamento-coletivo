const pool = require('../config/db'); // ajuste o caminho se seu arquivo de conexão estiver em outro lugar

const listarProjetos = async (req, res) => {
  try {
    const resultado = await pool.query('SELECT * FROM projetos');
    res.json(resultado.rows);
  } catch (error) {
    console.error('Erro ao listar projetos:', error);
    res.status(500).json({ erro: 'Erro ao buscar projetos' });
  }
};

const cadastrarProjeto = async (req, res) => {
  const { nome, descricao, valor_meta } = req.body;

  if (!nome || !descricao || !valor_meta) {
    return res.status(400).json({ erro: 'Preencha todos os campos obrigatórios' });
  }

  try {
    const resultado = await pool.query(
      'INSERT INTO projetos (nome, descricao, valor_meta) VALUES ($1, $2, $3) RETURNING *',
      [nome, descricao, valor_meta]
    );
    res.status(201).json(resultado.rows[0]);
  } catch (error) {
    console.error('Erro ao cadastrar projeto:', error);
    res.status(500).json({ erro: 'Erro ao cadastrar projeto' });
  }
};

module.exports = {
  listarProjetos,
  cadastrarProjeto,
};
