import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/router';
import { cloneElement, ReactElement } from 'react';

interface ActiveLinkProps extends LinkProps{
  children: ReactElement; //Recebe Elementos do react
           //  ReactNode: recebe componentes <Text>

  shouldMatchExactHref?: boolean;
}

export function ActiveLink({ children, shouldMatchExactHref = false, ...rest} : ActiveLinkProps){
  const { asPath } = useRouter() //Pega a rota ativa
  
  let isActive = false;


  // if(asPath === rest.href || asPath === rest.as){
    if(shouldMatchExactHref && (asPath === rest.href || asPath === rest.as)){
    isActive = true;
  }

  if(!shouldMatchExactHref //Mantém ativo até quando estiver nas páginas internas de alguma categoria ex: usuários -> criar usuário 
     &&(asPath.startsWith(String(rest.href)) ||
     asPath.startsWith(String(rest.as)))){
       isActive = true;
     }


  return (
    <Link {...rest}>
    {cloneElement(children, {
      color: isActive ? 'pink.400' : 'gray.50'
    })}
    </Link>
  )
}