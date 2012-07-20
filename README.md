jquery-plugins-tv
=================

A set of jQuery plugins with methods callable from anywhere (not mouse/touch dependent)

## Getting Started

```html
<div class="scrollableElements">
	<div class="previous">Previous</div>
	<div class="scrollable">
		<ul>
			<li>item 1</li>
			<li>item 2</li>
			...
			<li>item n</li>
		</ul>
	</div>
	<div class="next">Next</div>
</div>
<script src="jquery.js"></script>
<script src="libs/jquery.scrollable.js"></script>
<script>
	$(".scrollableElements").scrollable({debug:false});
	// do a scroll down
	$(".scrollableElements").data('scrollable').scrollDown();
	// do a scroll up
	$(".scrollableElements").data('scrollable').scrollUp();
</script>
```
