import React, {useEffect} from 'react'
import { LayoutSidebar, Pagination, Pill, SideNav } from 'upkit'
import { CardProduct, InputText, Responsive } from 'upkit/dist'
import TopBar from '../../components/TopBar'
import menus from './menus'
import { BounceLoader } from 'react-spinners'
import { tags } from './tags'
import Cart from '../../components/Cart'
import { useHistory } from 'react-router'
import {fetchProducts, toggleTag, setPage, setCategory, goToNextPage, goToPrevPage, setKeyword} from '../../app/features/Product/actions';
import {useSelector, useDispatch} from 'react-redux';
import {config} from '../../config';
import {addItem, removeItem} from '../../app/features/Cart/actions';

export default function Home() {
  const history = useHistory();
  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch, products.currentPage, products.keyword, products.category, products.tags]);

  return (
    <div>
      <LayoutSidebar 
        sidebar={
          <SideNav
            color="blue" 
            items={menus} 
            verticalAlign="top"
            onChange={category => dispatch(setCategory(category))}
            active={products.category}
          />
          } 

        content = {
          <div className="md:flex md:flex-row-reverse w-full mr-5 h-full min-h-screen">

            <div className="w-full md:w-3/4 pl-5 pb-10">
              <TopBar />

              <div className="w-full text-center mb-1 mt-5 shadow">
                <InputText
                  fullRound
                  value={products.keyword}
                  placeholder="Cari makanan favoritmu..."
                  fitContainer
                  onChange={e => dispatch(setKeyword(e.target.value))}
                />
              </div>

              <div className="mb-5 pl-2 flex w-3/3 overflow-auto pb-5">
                {tags[products.category].map((tag, index) => {
                  return <div key={index}>
                    <Pill
                      color="blue"
                      text={tag}
                      icon={tag.slice(0,1).toUpperCase()}
                      isActive={products.tags.includes(tag)}
                      onClick={_ => dispatch(toggleTag(tag))}
                    />
                </div>
                })}
              </div>
                  {
                products.status === 'process' ?
                  <div className="flex justify-center">
                      <BounceLoader color="blue" /> 
                  </div> :             
                <div>
                  <Responsive desktop={3} items="stretch">
                    {
                      products.data.length > 0 && products.data.map(product => {
                        return (
                          <div className="p-2" key={1}>
                            <CardProduct
                              color="blue" 
                              title={product.name} 
                              imgUrl={`${config.api_host}/images/products/${product.image_url}`}
                              price={product.price}
                              onAddToCart={_ => dispatch(addItem(product))}
                            />
                          </div>  
                        )
                      })
                    }      
                  </Responsive>
                  
                  <div className="text-center my-10">
                    <Pagination
                      color="indigo" 
                      totalItems={products.totalItems}
                      page={products.currentPage}
                      perPage={products.perPage}
                      onChange={page => dispatch(setPage(page))}
                      onNext={() => dispatch(goToNextPage())}
                      onPrev={() => dispatch(goToPrevPage())}
                    />
                  </div>
                </div>
              }                  
            </div>

            <div className="w-full md:w-1/4 h-full shadow-lg border-r border-white bg-gray-300">
              <Cart
                color="blue" 
                items={cart}
                onItemInc={item => dispatch(addItem(item))}
                onItemDec={item => dispatch(removeItem(item))} 
                onCheckout={() => history.push('checkout')}
              />
            </div> 
          </div>
        } 
        sidebarSize={80}
      />
    </div>
  )
}
