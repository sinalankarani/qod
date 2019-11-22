<?php
/**
 * The template for displaying the footer.
 *
 * @package QOD_Starter_Theme
 */

?>
		</div><!-- #content -->
			<footer id="colophon" role="contentinfo">

			<div class="site-footer">
				<nav id="site-navigation" class="main-navigation" role="navigation">
					<?php wp_nav_menu( array( 'theme_location' => 'primary', 'menu_id' => 'primary-menu' ) ); ?>
				</nav><!-- #site-navigation -->
				
				<div class="site-info">
					<h1 class="site-title screen-reader-text"><a href="<?php echo esc_url( home_url( '/' ) ); ?>" rel="home"><?php bloginfo( 'name' ); ?></a></h1>
					<div class="website-info"><h3><?php printf( esc_html( 'Brought to you by ' ) ); ?> <a class="github-link" href="<?php echo esc_url( 'https://github.com/carbonmass/' ); ?>"><?php printf( esc_html( 'Sina Lankarani' ) ); ?></a></h3></div>
				</div><!-- .site-info -->
			</div>

			</footer><!-- #colophon -->
		</div><!-- #page -->

		<?php wp_footer(); ?>
	</body>
</html>
