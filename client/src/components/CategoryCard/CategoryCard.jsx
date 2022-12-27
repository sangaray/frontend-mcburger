import { useDispatch } from 'react-redux';
import { getProductsByCategory } from '../../actions/index';
import { Box, Image, Text, Button,  Divider } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import "./CategoryCard.css"


export default function CategoryCards() {
    const dispatch = useDispatch();

    //funcion que despacha la accion para filtrar los productos visibles en
    //el estado global
    function handleFilterCategory(c) {
        dispatch(getProductsByCategory(c))
    }

    return (
        <div>
            <div className='tittle-category'>
            <h1>Categorias</h1>

            </div>
            <div className='cards-container'>

                <div className="card-container">
                    <img src={"https://easyrecetas.com/wp-content/uploads/2020/05/Receta-de-Hamburguesas-Texanas.jpg"} alt="1" />
                    <h3>Burger</h3>
                    <Link to="/Menu">
                        <Button size='lg' colorScheme='orange' marginTop="10px" onClick={() => handleFilterCategory(1)} >Click Here</Button>
                    </Link>
                </div>

                <div className="card-container">
                    <img src={"https://www.guysgab.com/wp-content/uploads/2019/12/McDonalds-New-Chicken-Sandwiches.jpg"} alt="2" />
                    <h3>Chicken Burger</h3>
                    <Link to="/Menu">
                        <Button size='lg' colorScheme='orange' marginTop="10px" onClick={() => handleFilterCategory(2)} > Click Here</Button>
                    </Link>
                </div>

                <div className="card-container">
                    <img src={"https://247wallst.com/wp-content/uploads/2019/02/mcdonalds-4-piece-chicken-mcnuggets.png"} alt="3" />
                    <h3>Nuggets</h3>
                    <Link to="/Menu">
                        <Button size='lg' colorScheme='orange' marginTop="10px" onClick={() => handleFilterCategory(3)} > Click Here</Button>
                    </Link>
                </div>

                <div className="card-container">
                    <img src={"https://cdn.poz.com/97948_coffeeiStock-509141291.jpg_5420e619-7ed7-4bad-b6b8-bf6e4b519087_x2.jpeg"} alt="4" />
                    <h3>Coffee</h3>
                    <Link to="/Menu">
                        <Button size='lg' colorScheme='orange' marginTop="10px" onClick={() => handleFilterCategory(4)} > Click Here</Button>
                    </Link>
                </div>

                <div className="card-container">
                    <img src={"https://www.osano.com/hubfs/assets/blogs/featured/cookies-pixels-tags.png"} alt="5" />
                    <h3>Bakery</h3>
                    <Link to="/Menu">
                        <Button size='lg' colorScheme='orange' marginTop="10px" onClick={() => handleFilterCategory(5)} > Click Here</Button>
                    </Link>
                </div>

                <div className="card-container">
                    <img src={"https://images5.alphacoders.com/364/thumb-1920-364126.jpg"} alt="6" />
                    <h3>Beverages</h3>
                    <Link to="/Menu">
                        <Button size='lg' colorScheme='orange' marginTop="10px" onClick={() => handleFilterCategory(6)} > Click Here</Button>
                    </Link>
                </div>

                <div className="card-container">
                    <img src={"https://www.curtamais.com.br/uploads/conteudos/ec3304687e619f6c97ae3ecab17e70c8.jpg"} alt="7" />
                    <h3>Desserts & Shakes</h3>
                    <Link to="/Menu">
                        <Button size='lg' colorScheme='orange' marginTop="10px" onClick={() => handleFilterCategory(7)} > Click Here</Button>
                    </Link>
                </div>

                <div className="card-container">
                    <img src={"https://airescriollos.com.ar/wp-content/uploads/2020/10/Guarnicion-de-Papas-Fritas.jpg"} alt="8" />
                    <h3>Sides</h3>
                    <Link to="/Menu">
                        <Button size='lg' colorScheme='orange' marginTop="10px" onClick={() => handleFilterCategory(8)} > Click Here</Button>
                    </Link>
                </div>

                <div className="card-container">
                    <img src={"https://goldenstatemcd.com/wp-content/uploads/2015/11/McDonalds-of-San-Joaquin-County-food-information-03.jpg"} alt="9" />
                    <h3>Vegetable</h3>
                    <Link to="/Menu">
                        <Button size='lg' colorScheme='orange' marginTop="10px" onClick={() => handleFilterCategory(9)} > Click Here</Button>
                    </Link>
                </div>

                <div className="card-container">
                    <img src={"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTEhMVFhMWGBgXFRgXFxgYGxgZFhYYGBUdGBUYHSggGBsmGxUVIjEhJSkrLi4uFx8zODMuNygtLi0BCgoKDg0OGxAQGzAmICYtLS0tLS8tLS8tLS0tLS0tLS0tLy0tLS0tLi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAMIBAwMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCCAH/xABBEAABAwIEAwUFBAcIAwEAAAABAAIRAyEEBRIxBkFREyJhcZEHMoGhsRRCwfAVI1JyktHhFjNigqKywvFDY9IX/8QAGwEBAAMBAQEBAAAAAAAAAAAAAAIDBAUBBgf/xAA3EQABAwIEAgkDAwMFAQAAAAABAAIRAyEEEjFBUXEFImGBkaGxwfATMtEUI1IV4fEzQmKConL/2gAMAwEAAhEDEQA/AOGoiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiIiK8t9ndX9GfpE1mAaDUFMtMlodp9/kTyEfFUZfQHFzTR4apt2P2fDNPm91Iu/5KTRK949/ofeF8/oiKK8REREREREREREREREREREREREREREREREREREREREREREREREREREREWzhMJUqu0UmPe47NY0uPoBKItZFcMv9mea1gC3B1Gg86hbT9Q8g/JTlL2JZkd3YZn71U/8AFhRFzam0kgDc2C+gfbg/ssrpUhzqUWfwMe7/AIhVfLPYpjWVab318Jpa9jnAPqElocC6Jp7wCug+1fhHE5lRpU8M6iNFQvd2jyJ7mkRpab3cpDdPnmF8xIug4z2O5sy7aLKn7lVn0eWqsZrwtjcNP2jC1qYG7ix2n+Md35qKKFRERERERERERERERERERERERERERERERERERERERERERERERERERF1D2S+z6ljQ7FYsk4djixtNpLe0cAC4ucLtYA4bXJ5iL9RxOd4PAs7Om1tIT7tCmB/Rx8SVG+yKlRdl9BlKoTZ5qwbio50vBbyIAbHhfmt/jPh6gymXimS7qXOJ+sKmsajRLQO9dXo6jhn1Q2tJnYR5ztyutB3HYc7uUqjhb3qgA9Lr0eKKwF6FEdJe4x6QqPlhh5Hip7EnurmnF1nA9byC+sqdG4Wi8NazxJ/MeSkm8Z1xbssP8e1J9ZUhg+I679mUAf3qv8yqTzU5k3JUUMZXc+C70/C9xGEoNZIYPP8AKs2J4gq0wC6gwjn2dUz6OafqsdPjylcO7Rn7wDm+oM/JaOdHuKg5o6611MZVpuABnmB7QsmF6Mw2LHXbHIn3JHkrfxDw3lmYtc6n2dKuQSK1IaQDy7SlaR4kT4rg+Z4F9CrUo1BD6bix0bS0xY8wurZJhtTXPMgtBIc0wfKy57xs6m7GVHUzIdBdFwH6RqAPO66FCoatPORC+f6YwFPB1Q2m4nnt37qvotzBZfVqk9jSqVCN9DHOidp0iyn28AZjMfZ4tuX0426h268qV6VMw94HMgeq5bKb3/aCe5VRFdafs0x5AJbTE8i8W84BC9t9mOOJj9UPHWY/2z/2qP6jhZj6g8Vb+lrfxKo6K7//AJljZiaP8bv/AJUFnPDmIwxPa0naAY7QAlhmIh8ePNTp4zD1HZWvBPNRfhqrBLmmPnBQqIi0qlERERERERERERERERERERERERERERERERdF9heKLMzDZMPpvBE2JA1CRz2K7fxtekfJfPnsoq6M2wp6ucPWm8L6B4vdNI+SqqfaV1MAP3KZ4Ej391yPBn9Y7zU/VPdVeomKp81OvPdXD4r73FDrArS5qcyXcKBG6nslddUYX/UWfF/6ZUnnh7i5/me6vedvGlecl4VhzatVsuPea0gw2BMvPWSBG9j5rTiT11mweJZhaWd/cOPzdRWR5K+rhXsks7VpYHEGQHWLgOcAn0W5kXs8w9Gk1jmNrFrzUDqjGzqgACWiS0RMEkX8ot2oNNOmYdyIHOBNvBbzXQS1xkl5LR0baFnfVqVG5Q6ANha/auFjMQa1T6paLyRvbT24DsUdSwDA0NaA0CJDO6LeUW3Xl1DW2GOLSYIIg7GSLgj/ALW/2neexjbtvcWMix8RNky5r2sAqPD6n3jA5kkAAAWExssjsNmOvl89FQajgJ5efzisP6OJdq0gHrzX7XwBa2e98N7/AF2CkKgDgWu258vEL8LohovHPfxuVM4Nn3SfHfkqvrPJHyyj2YYFsm9pEiPkdvitXEYS0QSDYjw5SDuPz4KZqnwsef5lflekCIF7dOaj+lF8u3v6qTaxBXLuKvZ7QxAdUZFGqXF7qglzSIvqZMDrIvvMrkue5BXwjgKzbO917TLXeTvwX1D2II8fzzUFxDklPEUnUajdVMkOg/tRAIcLgx032WzCY6rhwA85m+YHOyjUoU6xkWd5d6+Y0Vl4y4aqYKsQWnsXE9k6QZFiQY2ImL7wq0voqdRtRoe3QrlPYWOLXahERFNRREREREREREREREREREREREREU/wNW0ZhhXf+1o/it+K+jOJ3zS+C+ZMkqacRRd+zUYfRwX0fn1aaPwVNXfkux0Yycp/5ewXMdUVT5qZdU7qgK7oeT4rfqYjuLjBmYlfoNanmyrHVxkFZKOc6eRUO9ywPKrZTDdFKoynEESuk8EB+JqGs4HsqVtpl2k2+Agx4hXka4ki0AgT3tVy4HlAtHxVN9m2IYMI4yWaHkvIO/ukEjoWgNjwPVbeN4pqVHBtBunkI7zj8OSnUqMYJefyf7Dtj1j4rH56uIcABDbDsA/Myfaym2ulkuBpG5JcQPr5LUdm2GpXNTWTYxJi/K0DruoOphajnNFZxl4cRJ1mGaQbDYd9tyq5UovdWq0maoZJNoPLr5geKwsxLQYDRYAyb20nh5KllMVHEZrRJ2ETGpub9vgr/AEuK6N41uHgB+LlhxXFNP7rLj9p4HzglQHC2Wa6pa5khl3h079PPf0Ks+YU6IMNpU2zaA0fkrzEY97GaiZsMvnJt5yvK9PDYd+V0kxNj82utBvFzolrKc8rOcR8bBYf7W1r6Wtg/4XW583LSqUf1rqbRMXHgDG55RO5XqrgnNGokEbHSZjzsqTj6luty037lvbhsHYfyAIE3I1C3KXFOKJ7tJrvJrz8g4rM7jIgd+l3ugJG3+Eiy28hr06QJc0ExuRKr+a4jW9xgQStz672UmuLpJ2tby1VdPCUqtQtayw3nVWjBcQYeoPeDHH9uR/qiPmt9tAOvYg3Ec1y6pVDXSB8Fnweb1NQ0ksg/dJH0N16yq2oOu3w/GnptwVWI6PdRMtNu1THtN4dFbA1jHeotNZpmP7sHV590usvnVfSvEOdtdlWKqPcA7sKlMzzdUaWMt4lwC+al2cC0Npw3TUd64eKcS++qIiLasyIiIiIiIiIiIiIiIiIiIhMIinMq4ZxFe7abms/aIMfISVbsu9nlIEGvUe4dGAMn1mFkrY6hSs51+AutzOjcQ5uYjKP+Rie77u+I7Vzqm+CD0IPovovMa+qgD/hH0VR/sllkQaLx49o+frHyVopDDuYGCq8ACACWHa37Kw1OlKDtJ8P7rq9HYc0J+odwdzpM7clzzEO7x8ysmvuwrXiOC2OMsr78iI+YKxVeDj92tP7wIH+nV9FmZiqQvm1X139Twp/3eTvwqe5YaiseJ4SxA9wNf5ED5OgqMxWRYlvvUH+Ya4j1AhSY5rtCpuxVF46rh4rzkGa1aTn06TdYrN0OYNzFwW+Iv6lWfhZtZuL01WOYOyc/vR7mprRsTHeI9CtPgHsWVHOqOiuXCnTaRcaokyeZ2ttBndXPG49jSXBhcfc7oEuBPug7mSudjsT13Usu0TfU94EDivjelcR+66mB38V+43U5zW0i0EXeeen8eVvELTr4J1RryyAX9x7nk94NdqFgNwbT5dFu4bDV3atLADH3oP3RpAI6ELa+x1KrKbIId948hYTA81yWPDIAjh77a8lxRSq5o468u1Qeb4qthcE80KfaVS6mDpk3c0MG13QWgf5vBVfPM5xbPs7SW9tSvWtAJJBLW9dLYE8zKuHFGcYTLGij3n13XDG950nYuJMNmOe8WBVSwvGb6lRpq4OiGamio5z5c1rjBM6YkCT8F08PQrOdm+jMTqQNssX2AmQJ6xkmRAOpuzSDPjwhWTh2r3KxqVNTatQ1GuLXN7pAAbBHL8VsZFRf2T6dd1NweXBjqYI7u4seYUbxpmJpUmMw9RkvLnB5AdFMCJbyMlzL3UNleeVMNRqUy3tK9QgtqOcXQI2LRsARsImTtuoNwNWo0vbxt/1HhtHDeBqJCnUqfuiZtCvGX4LsqU6XVYJJbO9okBzr+An5rPTOpjdVJsbCWAD+EjZUvL+PqzWAVqLajXGHPa4si3JsODgeVwmM4lxFR5fRqVKFMCzQWuNuZBaYvPLoramCrOhu0bwd7+fbyhSZh6z3HOTznc/54KZzLK6WrvMcxokucCY6gjUOX4lVzHUexYyqXHS6dRf3Q0jab8xf1W8zjvE0oD3Nrgg9x7Q17ukFoAbsblpGystAYbMKJqUx3R3a1GoAdLouC28GDytBkJNbC3eJB+W1vz1AtoSug+vXyZXOzaak9unMnyXG+LuKzWpjC0ieyDtT3Se+WghoA/YEk+JjoFTFJZzlzqFepScHDQ5wGoEEtBOl3kRBnxUavrqIYKYyaRI71xnuLnEu1RERWKCIiIiIiIiIiz0KLnuDWgucdgBKL0AkwFgWVjCTABJVyyT2f1qsGoCB0H4n+Sv+T8BspgS1Vmp/ET6LqUejDrXcGjhq7w0HffsXK8u4Yq1LvBaOkSf5LoPBvATHHW5oYxtiXG7jzAJsPEjrCvFDIGU2udHui3mfd+ZCwVHNY5jAbR8zufMm/quT0hjDQhrrkgmNBbjF77a9y69JuHpMjDN638zdwtcibAxwAsVkxeXUqcMaA6BsL+iwvyymATU7vgN/iVJsotjULH8VVcfiHNcWuPj5rluxgcBlpgE9siPIz8vtTTplx+4+5UpRyGjX7rNTYElwcTHwJgqWw/BuFYBrD6h6ueR8mQtrhDDhmHDju86vgLN+k/FbecVi1rYMOcbSOUSbeiukNoGq6LD53wslSo81cjTaVVuI8AMPpfQlrdiJJH+omFpUMaXC5U5i8OKrdL3vIO/uj8F5p8O0Gs/8hPXUuO6vSqE7dy1B+VoDrpgcNqEkqSGEaB4/nosOV4JzBYkjxgx9FvaTK6GHxeFawZgZ/wDk+uiz1Sc0AqnZ1l7WYhmLa2X057QASXNLS2QObmzPiBHRa7OIKTa1FxYXU3hzm1GkFobMEkGDOo7RO/SFda+Dabkn0gqo5rwlRh4p1alMuJIHdIaTcw2JgmSRPNU1auFqP/cJFo2mL8CdJ8JkIQKpadSNPH4FcMJWbAIIINwRsQdoK8cU8RU8FhXVyB3R3RtrqOtTb5cz4AnkqZkNN2BYW1sU19Fokh7dJZe5DtRhvhHpzjsVmdLNKz2e9h8O6n2VM27R7w8Oe/mAA0tA8STuIowgdSLgL0xEuAi0i14gmwjhOouqcS0NEu14KktxZqOdVrlzq1Ulz3WkmR7onpYchAA2W9QwLw7S9kB7RAcB433EmRBt1+O5h8NQw2YUw1pfSY09kSZ017mmCf2ZEN5l2lTea42lisI+o0tdWoNdUDTE6Y/WNI5tLZPm0LtVMcGubDTlMSdIk25aXkjsneltfaLKuaKZMGoIAAAJtY2gc/K2y3q7aVLUJBbETB2tAHQ3JuearuFwNXEUzWZhi6mH6CWaQSTG23dBcJcLDwgr1meU4mkXU9LqjmtZUJYe00sOoXJEuI0O2/ZPJaXPph2QvE76ba/331tsLhimhTGG1e/TqU3Bnd0vJ1Q7/C0QHWEGZssIrtLjMtqCC6ZNnEmxHnJ23+CZVklRzWVK/dYC3smG1So7p1Y28nnbkveY4QCoXe61zuzJiG6ie/ubCQT5AdVUMRSLy0Hv7ffuXn6kTC9jDuioO0YGkadQi4EwfHbeJhaGR8R1cvxD6xJqAtY19MGA5gIE7bgl0H+a8ZpSqNDmuYWsIDrjcTDYcCd7m23otPB5e+u92GqBzHOgF2nVpEBzSQCJHdAWlv03MJfdsX5Wva9vLmoVqgIsVOe2Orh67MFi8O5rhVZVBI3hhYQCORBe8EciuYKRzXCVKFR1B7pDHTAJ0yQLxyJEeNo5KOW7CUm0qLWNMgaHsNwue92Z2YoiItCgiIiIiIiIrLwZwfiMyrdnQbDGx2tQ+7TBnfq4wYaN/ASR9AcNezrDYNgDGanfee67nH8B4Bcl9nOc1cPQ00qjmh7y50c4ho+i6dledVHganuJ8SVEPEwutTwFVtMVWkXAO83E/IVxp5W0bABZW4AdQo7B1yVL4YqYKyPzt1KhuKCKdJrW+85wJ/dZc/PT81Ua+AbUcXAuD5sZkdRbaFM4zE9vXfpu0HS3ppbafiZPxUVjK3Y1QD95o9QY+kL4jpTEOrYpxZt1QeOXXznuhdzCtNOmGH7tTzPyO5ZqNSxbs8bj88lA5vhy7u7OFwVOVcL2oD6Z0vG3QjmCsrcLr062w8WM9PPmsdGW9YK4OAM+KsHDbC3CUg7fQ2fMhYM8oiqdAs4CWkXIJ+uwsvLsecOwSC5nOBtO3w/ovzAZjTq1HPB2tFx8itlavnpNpCxkT2RJN9CNI8wuY2m4OdV2uQoDCmvq01GtaRzkwfEW2VhwVEESTK/M1wnaiWiHDY9fA+C0stxBbLTMixB5LnPa1r5cBHK3O94WlzzVZIsVPUMOCLLRzaoaJbAc7VIEDYj8/JZKOaNaCSQBzkgR6rQzDOKdUANOxmYPQhaXuwz6ENHWHYQZ+dqzU6VQ1Liyz4SnUqTJjw39VFZ/wtia393iNEXs03ts4h23gt/AZiGeXOQt12e8g3UejfzCjhHYZo68h3KR7+isqNrBxDRZckx2XuwNV5fTBqFrWNsC1zHxqLj94amEEf4h1WHJ6+HwtQVqNEio4FlRmqKekwZAM3ECLdVLcdZXjMTiBWY1pY1oa1skFovJNu9J6dB5qHyqjg9RGIxgY4GC0NuOsyDC6hNN9IukmdQJJjYEDx7FbSwmHDf3tflu1TGHfgY7Z9J3bCpqDR37gy0gmBv12UVhcO0EPLWh8kgtABEmfeF1dMu4XwlRjX0qjntOzmvYQfiBC3v7HUP/AG/xD/4WFuNojNDnX4yYA28+K24d2AoEkA34ifBUMPeHBzXw0CNADQyLkjSAGwZNoWwapc7U4mRsZiI2DY2Hkrq7g2hyfUH+Zp/4pT4Oo/t1D/CPwVor0iAQRpwvHLXyWtuMwDbgRt9u3gq1WrB9MBzG90Q12kaxG0P3F/FRuIJc3S/v6XagXXM3EzEzc+qvw4YoDftD5uH4NUTmeXYGm4NfXZSeRZr6rAfRwlVHGU8wBJJGljZVDFYImMv/AJCpmLbqmb2A+AMgeGy2KHE3YwKhpi+lrniI3IBI5b7+qsH9mmPE0q7XDwLXfMFUb2kcN16TaZaxz2DU6o5okNOzZAuLSSdrrZhv0+KcKTnD0jx9N1l6R/SGg5zGjNtaCtH2m16DnURTc11Y634gtv3nimGyR4MNuUqioi+nw1D6FIU5mPcyvlCZRERXrxERERERERXHhipFNnx/3FdDyPF7LlOSYq2jYi48j/X6qy4LM6lM2dt1bP0usriQ42X1uEr0qmHYydABfsELs+W4jZZ+JM47DCVqkwSNDOup9gR5CT8FzXLeNnM95jXeTtJ/1JxlxOzEMptpgta0kukh0uMgbWAAn1R9cBhjVZnYJ2fPYgXNxt39341Vx4MraqYdztPgtP2gW7OoPunvHoHdfiB6qvcCY9znGmHkQNhzH5suljKm6QXEGRzv9V8waT5yhtmmfGfWUe9rHioTqqrwxi9Q0+iniw8r+H9Vh/QFOm7VSGnnb3fSbfBeH40NmTcGNrSufWphr5I+eh9CpF31DLFsVMQYgjU0jbmBzB/Mqsw6lVBHxA5hXDLtDgJPePNYOIcradLgLDmDf8/yUwHvpmpq3e8x3a+0RCjSrNa/6ZGq3csqtqNaJ3Oy9Zy1naNiJj5clGZbQc1xe3U6YkE2tzAixj1gLxmuOIBed+nkq31s2HNMC5IAMbAes2+XpFEmtLTb8qVOWMfDtI1gWdE+vVeKFBuqHgz4c1myzHtexpHh81nzihLJaYLbg/gr/wBMx9L6lODl1B37uyDe54ys+dzX/TcY9l4dhhcaRpi881Ws1xLMI8NJ7rzDdrHp9VI/baunSIPmtGrgHnvhgdViA533QenReVK1Ks2GMPpHZZaqVNzD1iI+XWti82osYXvdAAnYzAE2G5NtguOYnGDFYmtVAJ7Rw0CO9sA0QOdgLc/gulcVYPENwhJDX1GEPhgJktdYhsXIaue+zp9N2JFWpVDXUQHNYSA6q7kGybwYMC5XR6MY2jSq1dSLe8ab2us+JrkOy7ajtWOjj8XgKojXRqRMXhwn7zdnDlHJdn4L4pZjaWrSWVW2qMPXqwndv0XO8XRp4jH1u2YX06NNnZu1ENJqVC4kkROpryf8qy4rCYii6lUwZOtlRxM2DmzLGnkWGm5u3OdiLQxDqOJAzANqETm20kdsQRroTusgxH8l2EiV+x+eihMFn7TQ7WtppFo/XAvaQxw94agYhUfjjjOrNIUqzRReJFJrCXVWEGHuqT7sgANAG5N4tzcLR+tULND33OwkT46RcSrajwwStrO+NXYl9ahgXGnTpQKmI0GXuLw0tpzApgT7x7x5Bc0zCu+lWElwqsqAkPmS5rgZJ5g2ud5C6LlGIfiMMTpDde4A96dzH4la2Y5WzEVMPX1Ui3D6tQkF1Rwg02yDyLZjxNl08Pim4d7mFsNuDfstJi+YiPW4JWX9Q4ggiyw8RZcx75o02jEBgeC0BpJuC2RFyLjxjqtbKsdmrSGtaSyAIrkEHyc8h5nzsvfCmZGvXc4va2odRaPOdIvuBK1uHHYp1QCoHtfJFQ1LkuaSKhHhb59AvMpZTNKoGnKP9wmJ4XFrbdnFGYipTEBY80yDD44vDKZwmPYf1lMiab9u9I2BkHUOux3VAzfKa2GqGlXpljx1uCOrXCzh4hfQ+PymoCK9MNc7QNQjvPDZLWg8zc77LhOc8SYjE0xSrHWxrtVNzwNbZtGtsTaJkXgdF1OjDih1XN6kDU3byN5brAJkDfZeVCH9Z1j2b8VXUXvQeiaD0XaVC8Iveg9ERF7+zlevsxUqMGV6+ynoinlUZh2Oa4OG4U7TxRIlazcOt+jgLXn4FQcAdVrwz3U5jRe6NWd4W1TPIbc4Wo7Au+671usbe0Ybj0KodSldSnjA3VWbKxUoVqdQCZuNNw5v3hPXwXZMvxrajBB2v4jwK4hlebtZAfOmQf3T1adv5qQzDiCtSr06lB9iI1N7zHC1iNvW4XFrUKrauWLEG/GLjv8AmkI8MqNsV2l5EKocSYKtUe+nSDCx7NLgSQZvBb3T4cxspDCYupUpNfrbJbJiFKZTShsnvP8AVc4l9WoG6dv+N+G6rA+kCTfaFz/BZNmNBoBqzpiJMWFhvIKmsPmNYt01pBB5ix+OxVpzITFlH/Zw4GRPgsuIc41nMgcwIMd2vJaKdcOaC4LYyrFAHwKr/GbKj3tbhwTM6iOW0fHdQv2mrSeaeoy0wfH8iFbspfqA8Ry6+fNRGekGssRMjvHw81J1MU3GqFAcPYirQhjw4g7d026q14jHOqMggjz5rO7BNcDa/VQrcVcscQS0wbrzEMrMBdEZtYOvNV5mVjIFwtihV0uuVtOxJ5FUH2gZtWaaTcI8a5JeYBgAAAEEcyZ/yqAo8U5qIBZTcP3YPqHLXh+jsS6iHsNjO8HX3Vb3080O15LqOMxjWsJed+vyAVXojDPqNJY0Em9hN9xMWnqOhVbxOc4us5pq0XhreTQSPE7yUwuMcwhzmVN+THfDkrafR9amJcL9ny97oRQfE9q6R+g8EaYpGixzGkkAyQPATsIsByFgt7DYHDsa1jKbWsb7rQAAL8hyEkqjM4ogA6apOxGh3he48Fvt4hYAXFzr7DQTEi8Q2d73Vp+vEFp5R/nzUf09LYjyVoqYWiO+ynSJdJlrGyZ3MgXWtiMrpVAGlgkC1pAA+luSg2cRUwBBsAbQRECLAiY81npcRUo99nzHnsD42VNZj6pGYOtz/Ci7CMIUtgsBSpiHNkjYCQAPIQCsWX5Dg6JJZQY2YsdRHh3XEjotT9PU4Pem0WBO3UASV+MzlsyNRttpd47SLXKspCq1uVoMcj5xqgw1MDbxUmzLcMyzMPTZGxZTa0i82IHW613YBpcXdDIte+4PmZUf+mTOkU3hvWQJ+c9VhpZrVERTE7EkztttuvXYV9Uy9p8x6wjqVKIMeXspDHY3s2Pe4kMY0k/AX/H0XAajJkltzc/HddOzrCVq+rVUIHNrQYMbAgnwVUdlg6/Jdzo+kaTDOp8tY9fDcrFi3BxAGgVXNLwQUD0Vm+wNHJfhwoHILoArFCrv2Q9EVg7FF6vFhYxZms8AjQsjF6prLh8IDcjyW4zC+Klsry0VKTTs69/id1jxWDfSMPEdDyPkVBaW6QtH7KF5GDBW2GBbGGoAuAXkr1alHKQ62mR5L1/ZaLtLmz0MfRWc02027/8Aa062JMiVRUzOMBTY4NuocZBiG/3das3ye4D+GYUngqmZU7DE6v32tPzAB+amMPirLOKkrnuwzXageAWgVlp4LNMaD+tDHDq0Fp+pCsGGzg82EFRgK9avFZP6aGulhy8vwpmu02IUVmWX9rVdUBLS4yeY2A2PkpPJqdam4EPB6SP6rWcXSYW1QxWndXHBsIAN16cQ6IGinn4qqRu0W5A/zVfrZTTc9z3E63bn8+S2v0iOSxCtzV7aTWnMJnmVQHGIWpVy1rTtI8l+tw4GzfktoVJK9l4VwcoEdq1WjwHov0Qs1UghRzcaJgAqTbjRRe7LqpHsR0X7oHRarcyH7N/PkdlkGObzEei8IIXn1WrIaY6BfnZjoFhfj2bC3wWOtj2tiSZI2XhDkNRoWyW+AXjStQ48G4bPxj6rwzHmbt+f9EycU+s1bZascrSGYOcYgD6rUOKJdvInl8l79MqDq4Gi33u58lWMSBqdp92THlNlNYuqSO97o/N1EYvE6rCzRy/mr6I4Kmo/MFpELw5qyELyVrVCwaUWWERFGBZGr9RFNXrhb+4Z5u/3FTWaNBoukTZEUCrRoFTGrNS3REVi2sfu3yWJ6IqeC9W5hNlK4bZEVT9VILI5eAiLxqkdFlw6841EXi8WKgtmp7pRFS7VWLANl7omyIrGqBWLE+6VGYP3j5L9RWN+1yqq7LJ98/u/8krcvM/giL1uo7lQFnp+47z/AAWjiveHkiKLPvPzZTfoF55L1VPufnovxF7v4+hVLVj++sVPc+f4oikdO5e7LHmm4Ua5EWin9oXjtVicvwoisUV4REXqL//Z"} alt="10" />
                    <h3>Combos</h3>
                    <Link to="/Menu">
                        <Button size='lg' colorScheme='orange' marginTop="10px" onClick={() => handleFilterCategory(10)} > Click Here</Button>
                    </Link>
                </div>

            </div>
        </div>
    )
}