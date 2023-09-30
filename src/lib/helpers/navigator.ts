/**
 * @module lib/helpers/navigator
 * @description <h2><code>navigator</code></h2>
 * <p>Provides a set of functions to navigate to different urls.</p>
 *
 * Navigates to a given url.
 *
 * @param url The url to navigate to.
 */
export function navigate(url: string) {
  window.location.href = url;
}
