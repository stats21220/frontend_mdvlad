import { Htag, Ptag } from '../../components';
import styles from './Company.module.css';

export const Supplier = () => {
  return (
    <div>
      <Htag tag='h2' color='black'>Поставщикам</Htag>
      <Ptag color='black'>В данном разделе мы предоставляем Вам контактные данные менеджеров отдела закупок ТК Мир Дерева во Владимире.
Телефон</Ptag>
<a href='tel: 8(492)222-21-02'><span>8(492)222-21-02</span></a> <span>(доб 135,138,156)</span>
  <Htag tag='h3' color='black'>Электронная почта</Htag>
    <a href="mailto:info@mdvlad.ru"><span>info@mdvlad.ru</span></a>
    </div>
  );
};