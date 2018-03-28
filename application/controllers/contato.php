<?php
if(!defined('BASEPATH')) exit('No direct script access allowed');

class Contato extends CI_Controller{

	public function __construct(){
		parent::__construct();
	}

	public function index(){
		$data['title'] = 'C2R - Construtora e Incorporadora';
		$data['description'] = 'Mude de vida com a construtora C2R. Apartamentos de qualidade e excelentes condições de financiamento! Realize o sonho da casa própria.';
		$data['keywords'] = 'imovel, imoveis, apartamentos, construtora, incorporadora, apartamento, comprar imoveis, planta, ap, apto, imobiliaria, ap com suite, vaga na garagem, condominio, corretor imovel, corretor online, Minha casa Minha Vida, beneficio do governo, beneficio, subsidio do governo, subsidio, venda de apartamento, casa, loft, imóvel, construtora, sustentabilidade,  aptos, dormitórios, residenciais, financiamento caixa, crédito casa própria';
		$menu['contato'] = 'active';
		$conteudo['pagina_view'] = 'contato_view';
		
		if($this->input->post('enviar_email') == "enviar"){			
			$nome = $this->input->post('nome');
			$email = $this->input->post('email');
			$telefone = $this->input->post('tel');
			$mensagem = utf8_decode($this->input->post('mss'));
			$assunto = utf8_decode('Contato via site C2R - Construtora e Incorporadora');
			
			$this->load->library('email');
			$config['mailtype'] = 'html';
			$this->email->initialize($config);
			
			$this->email->from("$email","$nome");
			$this->email->to('diego@c2rconstrutora.com.br');
			$this->email->cc('ever-tonlima@hotmail.com, paulo@spicyweb.com.br'); 

			$this->email->subject($assunto);
			$this->email->message("<html xmlns='http://www.w3.org/1999/xhtml' dir='ltr' lang='pt-br'>
			<head> <meta http-equiv='content-type' content='text/html;charset=UTF-8' /> </head><body>
				Nome:		{$nome}<br/>
				E-mail:		{$email}<br/>
				Telefone:	{$telefone}<br/>
				Mensagem:	{$mensagem}<br/>
			</body></html>");
			
			if($this->email->send()){
				redirect('contato/obrigado');
			}else{
				redirect('contato/fail');
			}
			
		}
		
		$this->load->view('html_header', $data);
		$this->load->view('header');
		$this->load->view('menu', $menu);
		$this->load->view('conteudo', $conteudo);
		$this->load->view('rodape');
		$this->load->view('html_footer');
	}

	public function obrigado(){	
		$data['title'] = 'C2R - Construtora e Incorporadora';
		$data['description'] = 'Mude de vida com a construtora C2R. Apartamentos de qualidade e excelentes condições de financiamento! Realize o sonho da casa própria.';
		$data['keywords'] = 'imovel, imoveis, apartamentos, construtora, incorporadora, apartamento, comprar imoveis, planta, ap, apto, imobiliaria, ap com suite, vaga na garagem, condominio, corretor imovel, corretor online, Minha casa Minha Vida, beneficio do governo, beneficio, subsidio do governo, subsidio, venda de apartamento, casa, loft, imóvel, construtora, sustentabilidade,  aptos, dormitórios, residenciais, financiamento caixa, crédito casa própria';
		$menu['contato'] = 'active';
		$conteudo['pagina_view'] = 'contato_sucesso';
		
		$this->load->view('html_header', $data);
		//$this->load->view('header');
		//$this->load->view('menu', $menu);
		$this->load->view('conteudo', $conteudo);
		$this->load->view('rodape');
		$this->load->view('html_footer');
	}
	
	public function fail(){	
		$data['title'] = 'C2R - Construtora e Incorporadora';
		$data['description'] = 'Mude de vida com a construtora C2R. Apartamentos de qualidade e excelentes condições de financiamento! Realize o sonho da casa própria.';
		$data['keywords'] = 'imovel, imoveis, apartamentos, construtora, incorporadora, apartamento, comprar imoveis, planta, ap, apto, imobiliaria, ap com suite, vaga na garagem, condominio, corretor imovel, corretor online, Minha casa Minha Vida, beneficio do governo, beneficio, subsidio do governo, subsidio, venda de apartamento, casa, loft, imóvel, construtora, sustentabilidade,  aptos, dormitórios, residenciais, financiamento caixa, crédito casa própria';
		$menu['contato'] = 'active';
		$conteudo['pagina_view'] = 'contato_insucesso';
		
		$this->load->view('html_header', $data);
		//$this->load->view('header');
		//$this->load->view('menu', $menu);
		$this->load->view('conteudo', $conteudo);
		$this->load->view('rodape');
		$this->load->view('html_footer');
	}
	
}

/* Location: ./application/controllers/contato.php */