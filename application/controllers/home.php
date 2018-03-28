<?php
if(!defined('BASEPATH')) exit('No direct script access allowed');

class Home extends CI_Controller{

	public function __construct(){
		parent::__construct();
	}

	public function index(){
		$data['title'] = 'C2R - Construtora e Incorporadora';
		$data['description'] = 'Mude de vida com a construtora C2R. Apartamentos de qualidade e excelentes condições de financiamento! Realize o sonho da casa própria.';
		$data['keywords'] = 'imovel, imoveis, apartamentos, construtora, incorporadora, apartamento, comprar imoveis, planta, ap, apto, imobiliaria, ap com suite, vaga na garagem, condominio, corretor imovel, corretor online, Minha casa Minha Vida, beneficio do governo, beneficio, subsidio do governo, subsidio, venda de apartamento, casa, loft, imóvel, construtora, sustentabilidade,  aptos, dormitórios, residenciais, financiamento caixa, crédito casa própria';
		$menu['home'] = 'active';
		$conteudo['pagina_view'] = 'home_view';
		$this->load->view('html_header', $data);
		$this->load->view('header');
		$this->load->view('menu', $menu);
		$this->load->view('conteudo', $conteudo);
		$this->load->view('rodape');
		$this->load->view('html_footer');
	}

}

/* Location: ./application/controllers/home.php */
