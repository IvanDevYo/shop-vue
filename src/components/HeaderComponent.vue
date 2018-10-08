<template>
<header class="header">
    <div class="top__nav">
        <div class="container flx">
            <nav class="top__nav-nav">
                <ul class="top__nav-list">
                    <li class="top__nav-item">
                        <router-link :to="{ name: 'about', params: {page: 'about-us'} }" class="top__nav-link">О компании</router-link>
                    </li>
                    <li class="top__nav-item">
                        <router-link :to="{ name: 'about', params: {page: 'brends'} }" class="top__nav-link">Каталог брендов</router-link>
                    </li>
                    <li class="top__nav-item">
                        <router-link :to="{ name: 'about', params: {page: 'services'} }" class="top__nav-link">Услуги</router-link>
                    </li>
                    <li class="top__nav-item">
                        <router-link :to="{ name: 'about', params: {page: 'pay'} }" class="top__nav-link">Оплата</router-link>
                    </li>
                    <li class="top__nav-item">
                        <router-link :to="{ name: 'about', params: {page: 'delivery'} }" class="top__nav-link">Доставка</router-link>
                    </li>
                    <li class="top__nav-item">
                        <router-link :to="{ name: 'about', params: {page: 'contacts'} }" class="top__nav-link">Контакты</router-link>
                    </li>
                </ul>
            </nav>
            <div class="mobile__menu">
                <a href="#" class="mobile__menu__catalog-link">		<i class="fas fa-bars"></i>		</a>
                <a href="#" @click.prevent="showMenu = !showMenu" class="mobile__menu-link">		Меню		</a>
            </div>
            <transition name="fade">
                <nav class="mobile__catalog__menu-nav" v-if="showMenu" @click="showMenu = !showMenu">
                    <ul class="catalog__menu-list">
                        <li class="catalog__menu-item">
                            <router-link :to="{name:'catalog', params: {category: 'radiatori'}}" class="catalog__menu-link drop-open">
                                <span class="catalog__menu-text">		Радиаторы отопления		</span>
                                <div class="catalog__menu-arrow">
                                    <i class="fas fa-caret-right"></i>
                                </div>
                            </router-link>
                        </li>
                        <li class="catalog__menu-item">
                            <router-link :to="{name:'catalog', params: {category: 'armatura'}}" class="catalog__menu-link drop-open">
                                <span class="catalog__menu-text">		Запорная арматура, регулирующая		</span>
                                <div class="catalog__menu-arrow">
                                    <i class="fas fa-caret-right"></i>
                                </div>
                            </router-link>
                        </li>
                        <li class="catalog__menu-item">
                            <router-link :to="{name:'catalog', params: {category: 'fitt'}}" class="catalog__menu-link drop-open">
                                <span class="catalog__menu-text">		Фитинги для труб		</span>
                                <div class="catalog__menu-arrow">
                                    <i class="fas fa-caret-right"></i>
                                </div>
                            </router-link>
                        </li>
                        <li class="catalog__menu-item">
                            <router-link :to="{name:'catalog', params: {category: 'trubi'}}" class="catalog__menu-link drop-open">
                                <span class="catalog__menu-text">		Трубы и шланги		</span>
                                <div class="catalog__menu-arrow">
                                    <i class="fas fa-caret-right"></i>
                                </div>
                            </router-link>
                        </li>
                        <li class="catalog__menu-item">
                            <router-link :to="{name:'catalog', params: {category: 'koll'}}" class="catalog__menu-link">
                                <span class="catalog__menu-text">		Коллекторы и шкафы		</span>
                                <div class="catalog__menu-arrow">
                                    <i class="fas fa-caret-right"></i>
                                </div>
                            </router-link>
                        </li>
                        <li class="catalog__menu-item">
                            <router-link :to="{name:'catalog', params: {category: 'kan'}}" class="catalog__menu-link">
                                <span class="catalog__menu-text">		Канализация		</span>
                                <div class="catalog__menu-arrow">
                                    <i class="fas fa-caret-right"></i>
                                </div>
                            </router-link>
                        </li>
                        <li class="catalog__menu-item">
                            <router-link :to="{name:'catalog', params: {category: 'schet'}}" class="catalog__menu-link">
                                <span class="catalog__menu-text">		Счетчики для воды, термостаты, монометры		</span>
                                <div class="catalog__menu-arrow">
                                    <i class="fas fa-caret-right"></i>
                                </div>
                            </router-link>
                        </li>
                        <li class="catalog__menu-item">
                            <router-link :to="{name:'catalog', params: {category: 'hidro'}}" class="catalog__menu-link">
                                <span class="catalog__menu-text">		Гидроизоляторы и баки, комплектующие		</span>
                                <div class="catalog__menu-arrow">
                                    <i class="fas fa-caret-right"></i>
                                </div>
                            </router-link>
                        </li>
                        <li class="catalog__menu-item">
                            <router-link :to="{name:'catalog', params: {category: 'kotels'}}" class="catalog__menu-link">
                                <span class="catalog__menu-text">		Котельное оборудование		</span>
                                <div class="catalog__menu-arrow">
                                    <i class="fas fa-caret-right"></i>
                                </div>
                            </router-link>
                        </li>
                        <li class="catalog__menu-item">
                            <router-link :to="{name:'catalog', params: {category: 'vodo'}}" class="catalog__menu-link">
                                <span class="catalog__menu-text">		Водонагреватели и бойлеры		</span>
                                <div class="catalog__menu-arrow">
                                    <i class="fas fa-caret-right"></i>
                                </div>
                            </router-link>
                        </li>
                        <li class="catalog__menu-item">
                            <router-link :to="{name:'catalog', params: {category: 'nasos'}}" class="catalog__menu-link">
                                <span class="catalog__menu-text">		Насосное оборудование		</span>
                                <div class="catalog__menu-arrow">
                                    <i class="fas fa-caret-right"></i>
                                </div>
                            </router-link>
                        </li>
                        <li class="catalog__menu-item">
                            <router-link :to="{name:'catalog', params: {category: 'armatura2'}}" class="catalog__menu-link">
                                <span class="catalog__menu-text">		Предохранительная арматура		</span>
                                <div class="catalog__menu-arrow">
                                    <i class="fas fa-caret-right"></i>
                                </div>
                            </router-link>
                        </li>
                    </ul>
                </nav>
            </transition>
        </div>
    </div>
    <div class="header__info">
        <div class="container">
            <div class="row">
                <div class="col-lg-3 col-sm-6">
                    <div class="logo">
                        <router-link to="/" class="logo0link">
                            <img src="img/logo.png" alt="" class="logo-pic">		</router-link>
                            <div class="logo__texts">
                                <ul class="logo__texts-list">
                                    <li class="logo__texts-item">
                                        Инженерка
                                    </li>
                                    <li class="logo__texts-item">
                                        Проектирование
                                    </li>
                                    <li class="logo__texts-item">
                                        Санфаянс
                                    </li>
                                    <li class="logo__texts-item">
                                        Монтаж
                                    </li>
                                    <li class="logo__texts-item">
                                        Установка
                                    </li>
                                </ul>
                            </div>
                    </div>
                </div>
                <div class="col-lg-3 address__info-container">
                    <div class="address__info">
                        <div class="address__info-item">
                            <div class="address__info-title">График работы:</div>
                            <div class="address__info-text">С 8:00 до 23:00 без выходных</div>
                        </div>
                        <div class="address__info-item">
                            <div class="address__info-title">Наш адрес:</div>
                            <div class="address__info-text">25 км МКАД, бл 4, ряд “Д”2, 11/12</div>
                        </div>
                        <div class="address__info-item">
                            <div class="address__info-title">E-mail:</div>
                            <div class="address__info-text">zakaz@santehnika5.ru</div>
                        </div>
                    </div>
                </div>
                <div class="offset-lg-4 col-lg-2 col-sm-6 header__card-mobile">
                    <div class="header__telephones">
                        <div class="header__telephones-title">Мы всегда на связи:</div>
                        <div class="header__telephones-item">
                            +7 (495) 777-77-77
                        </div>
                        <div class="header__telephones-item">
                            +7 (916) 010-28-28
                        </div>
                    </div>
                    <header-cart></header-cart>
                </div>
            </div>
        </div>
    </div>
    <div class="header__bottom">
        <div class="container">
            <div class="row">
                <div class="col-lg-7 col-md-6">
                    <nav class="bottom__nav">
                        <ul class="bottom__nav-list">
                            <li class="bottom__nav-item">
                                <div class="bottom__nav-link">ИНЖЕНЕРКА</div>
                            </li>
                            <li class="bottom__nav-item">
                                <div class="bottom__nav-link">САНФАЯНС</div>
                            </li>
                            <li class="bottom__nav-item">
                                <div class="bottom__nav-link">ПРОЕКТИРОВАНИЕ</div>
                            </li>
                        </ul>
                    </nav>
                </div>
                <div class="col-lg-5 col-md-6">
                    <search></search>
                </div>
            </div>
        </div>
    </div>
</header>
</template>

<script>
import Vue from 'vue'
import Search from './Search.vue'
import HeaderCart from './HeaderCart.vue'

export default {
    name: 'HeaderComponent',
    components: {
        Search,
        HeaderCart
    },
    data() {
        return {
            showMenu: false
        }
    }
}
</script>
