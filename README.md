jquery-plugins-tv
=================

A set of jQuery plugins with methods callable from anywhere (not mouse/touch dependent)

# Scrollable

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
## Parameters

* **debug**: boolean // *display console message*
* **next**: string // *css class to select the 'next' arrow default: '.next'*
* **prev**: string // *css class to select the 'prev' arrow default: '.prev'*
* **scrollable**: string // *css class to select the part that will actually scroll default: '.scrollable'*
* **scrollStep**: integer // *number of pixel to scroll at a time*
* **disabled**: string // *disabled css class default: 'disabled'*
* **highlighted**: string // *highlighted class default: 'highlighted'*
