import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    CardNavBarContentGroupLgWrapper,
    CardNavBarLeft,
    CardNavBarBody,
    CardNavBarULWrapper,
    CardNavbarCollapseWrapper,
    CardBarNotificationContent,
    CardBarNotificationWrapper,
	CardBarUserProfilWrapper,
	TagNavLink 
} from '../Components';
import NavbarBottom from '../Components/NavBars/NavbarBottom';
import logo from '../Ui/images/logo/logo-toudeal-svg.svg';

class NavbarContainer extends Component {

    componentWillMount() {
        console.log("Mounting");
    }

    render() {
		const { user } = this.props;
        return (
			<CardNavBarContentGroupLgWrapper>
				<CardNavBarBody className="navbar navbar-inverse p-5">
					<CardNavBarLeft logo={logo} AltTitle="Toudeal MarketPlace" />
					<CardNavbarCollapseWrapper className="navbar-collapse collapse" id="navbar-form-inputs">
						<form className="navbar-form navbar-left col-md-10">
							<div className="form-group">
								<div className="input-group">
									<div>
										<input type="text" className="form-control input-xlg input-xlg-2" placeholder="Rechercher un produit, une boutique ou autres..." />
									</div>
									<div className="input-group-btn">
										<button type="submit" className="btn btn-primary btn-xlg">
											<i className="icon-search4 text-size-base" />
										</button>
									</div>
								</div>
							</div>
						</form>
						<CardNavBarULWrapper className="nav navbar-nav navbar-right">
							<CardBarNotificationWrapper BlockTitle="Message" IconClass="icon-bubbles4" TextCount={0}>
								<CardBarNotificationContent ImageLink={`${process.env.PUBLIC_URL}/assets/images/placeholder.jpg`} ImageLabel={`Message Link`} UserFullName="Raphael Blehoue" BlockCount={5} TimeAgo={`04:58`} TextMessage={`who knows, maybe that would be the best thing for me`} />
								<CardBarNotificationContent ImageLink={`${process.env.PUBLIC_URL}/assets/images/placeholder.jpg`} ImageLabel={`Message Link`} UserFullName="Raphael Blehoue" BlockCount={5} TimeAgo={`04:58`} TextMessage={`who knows, maybe that would be the best thing for me`} />
								<CardBarNotificationContent ImageLink={`${process.env.PUBLIC_URL}/assets/images/placeholder.jpg`} ImageLabel={`Message Link`} UserFullName="Raphael Blehoue" BlockCount={5} TimeAgo={`04:58`} TextMessage={`who knows, maybe that would be the best thing for me`} />
								<CardBarNotificationContent ImageLink={`${process.env.PUBLIC_URL}/assets/images/placeholder.jpg`} ImageLabel={`Message Link`} UserFullName="Raphael Blehoue" BlockCount={5} TimeAgo={`04:58`} TextMessage={`who knows, maybe that would be the best thing for me`} />
							</CardBarNotificationWrapper>
							<CardBarNotificationWrapper BlockTitle="Panier" IconClass="icon-cart5" TextCount={0}>
								<CardBarNotificationContent ImageLink={`${process.env.PUBLIC_URL}/assets/images/placeholder.jpg`} ImageLabel={`Image product Link`} UserFullName="Product Name" BlockCount={5} />
								<CardBarNotificationContent ImageLink={`${process.env.PUBLIC_URL}/assets/images/placeholder.jpg`} ImageLabel={`Image product Link`} UserFullName="Product Name" BlockCount={5} />
								<CardBarNotificationContent ImageLink={`${process.env.PUBLIC_URL}/assets/images/placeholder.jpg`} ImageLabel={`Image product Link`} UserFullName="Product Name" BlockCount={5} />
								<CardBarNotificationContent ImageLink={`${process.env.PUBLIC_URL}/assets/images/placeholder.jpg`} ImageLabel={`Image product Link`} UserFullName="Product Name" BlockCount={5} />
							</CardBarNotificationWrapper>
							<CardBarNotificationWrapper BlockTitle="Alerts" IconClass="icon-bell2" TextCount={5}>
								<CardBarNotificationContent ImageLink={`${process.env.PUBLIC_URL}/assets/images/placeholder.jpg`} ImageLabel={`Notification Link`} UserFullName="Notification Name" BlockCount={4} />
								<CardBarNotificationContent ImageLink={`${process.env.PUBLIC_URL}/assets/images/placeholder.jpg`} ImageLabel={`Notification Link`} UserFullName="Notification Name" BlockCount={2} />
								<CardBarNotificationContent ImageLink={`${process.env.PUBLIC_URL}/assets/images/placeholder.jpg`} ImageLabel={`Notification Link`} UserFullName="Notification Name" BlockCount={3} />
								<CardBarNotificationContent ImageLink={`${process.env.PUBLIC_URL}/assets/images/placeholder.jpg`} ImageLabel={`Notification Link`} UserFullName="Notification Name" BlockCount={1} />
							</CardBarNotificationWrapper>
							<CardBarUserProfilWrapper profilName="Raphael Blehoue" profilImg={`${process.env.PUBLIC_URL}/assets/images/placeholder.jpg`}>
								<TagNavLink NameLink="Gerer Mon compte" PathLink="/app/profile" />
								<TagNavLink NameLink="Gerer mes boutiques" PathLink="/stores" />
								<li className="divider" />
								<TagNavLink NameLink="Mes commandes" PathLink="/orders" />
								<TagNavLink NameLink="Gerer mes services" PathLink="/services" />
								<li className="divider" />
								{user.infoUser.slug}
								<TagNavLink NameLink="Deconnecter mon compte" PathLink="/serviceslogout" />
							</CardBarUserProfilWrapper>
						</CardNavBarULWrapper>
					</CardNavbarCollapseWrapper>
				</CardNavBarBody>
				<NavbarBottom />
			</CardNavBarContentGroupLgWrapper>
		);
    }
}

const mapStateToProps = (state) => ({
	user: state.user
});

export default connect(mapStateToProps)(NavbarContainer)
