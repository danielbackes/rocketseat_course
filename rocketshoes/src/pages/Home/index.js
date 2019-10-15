import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

export default function Home() {
  return (
    <ProductList>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-todos-flyleather-masculino/06/HZM-1730-006/HZM-1730-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis Adidas</strong>
        <span>R$ 129,90</span>
        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-todos-flyleather-masculino/06/HZM-1730-006/HZM-1730-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis Adidas</strong>
        <span>R$ 129,90</span>
        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-todos-flyleather-masculino/06/HZM-1730-006/HZM-1730-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis Adidas</strong>
        <span>R$ 129,90</span>
        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-todos-flyleather-masculino/06/HZM-1730-006/HZM-1730-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis Adidas</strong>
        <span>R$ 129,90</span>
        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-todos-flyleather-masculino/06/HZM-1730-006/HZM-1730-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis Adidas</strong>
        <span>R$ 129,90</span>
        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
      <li>
        <img
          src="https://static.netshoes.com.br/produtos/tenis-nike-todos-flyleather-masculino/06/HZM-1730-006/HZM-1730-006_zoom1.jpg"
          alt="Tênis"
        />
        <strong>Tênis Adidas</strong>
        <span>R$ 129,90</span>
        <button>
          <div>
            <MdAddShoppingCart size={16} color="#fff" /> 3
          </div>

          <span>ADICIONAR AO CARRINHO</span>
        </button>
      </li>
    </ProductList>
  );
}
