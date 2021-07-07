import React from 'react'
import {animateScroll as scroll} from 'react-scroll'
import {
    FaFacebook
} from 'react-icons/fa'
import { 
    FooterContainer, 
    FooterWrap, 
    FooterLinksContainer, 
    FooterLinkWrapper, 
    FooterLinkItems, 
    FooterLinkTitle, 
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements';

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
      //   scroll.scrollTo(500);
    };

    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinkWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/report">One</FooterLink>
                            <FooterLink to="/report">Two</FooterLink>
                            <FooterLink to="/report">Three</FooterLink>
                            <FooterLink to="/report">Four</FooterLink>
                            <FooterLink to="/report">Five</FooterLink>
                            <FooterLink to="/report">Six</FooterLink>
                        </FooterLinkItems>
                    </FooterLinkWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>
                            Western Digital
                        </SocialLogo>
                        <WebsiteRights>Western Digital {new Date().getFullYear()} All rights reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer