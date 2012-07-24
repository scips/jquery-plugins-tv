$ = Jquery

class scrollablePlugin
	constructor: (element, options)->
		defaultSettings =
			next: '.next'
			prev: '.prev'
			scrollable: '.scrollable'
			scrollstep: 200
			debug: false
			disabled: 'disabled'
			highlighted: 'highlighted'
		opts = $.extend(defaultSettings, options || {});
		@elem = $(element)
		@nextButton = @elem.find(opts.next)
		@previousButton = @elem.find(opts.previous)
		@scrollableZone = @elem.find(opts.scrollable)
		@htmlcontent = @scrollableZone.html()
		@scrollstep = opts.scrollstep
		@topBase = 0
		@heightBase = 0
		@Boundary1 = 0
		@Boundary2 = 0
		@heightScrollableZone = 0

		# Add elements and prepare html
		@scrollableZone.empty().prepend "<div></div>"
		@scrollDiv = @scrollableZone.find "div"
		@scrollDiv.html(htmlContent).css "position", "absolute"
		@scrollableZone.css("overflow", "hidden")
			.css("position", "relative")
			.css("display", "block")
			.css("zoom", "1")
		@previousButton.addClass opts.disabled

		@topBase = parseInt @scrollDiv.css 'top'

		@Boundary1 = @topBase
		@heightBase = parseInt @scrollDiv.css 'height'
		@heightScrollableZone = parseInt @scrollableZone.css 'height'

		@Boundary2 = @topBase - @heightBase + @heightScrollableZone

	@scrollDown: -> 
		top = parseInt @scrollDiv.css 'top'
		console.log "next-before top: #{top} boundary 1: #{Boundary1} boundary 2: #{Boundary2}" if @opts.debug
		step = @scrollstep
		if top > @Boundary2
			if top - @scrollstep <= @Boundary2
				step = -(@Boundary2 - top)
				@nextButton.addClass opts.disabled
			@nextButton.addClass opts.highlighted
			callback = () ->
				@previousButton.removeClass opts.disabled
				@nextButton.removeClass opts.highlighted
				top = parseInt @scrollDiv.css 'top'
				console.log "next-before top: #{top} boundary 1: #{Boundary1} boundary 2: #{Boundary2}" if @opts.debug
			@scrollDiv.stop().animate({top:"-=#{step}"},{complete:callback})

	@scrollUp: -> 
		top = parseInt @scrollDiv.css 'top'
		console.log "next-before top: #{top} boundary 1: #{Boundary1} boundary 2: #{Boundary2}" if @opts.debug
		step = @scrollstep
		if top < @Boundary1
			if top + @scrollStep >= @Boundary1
				step = -(top - @Boundary1)
				@previousButton.addClass opts.disabled
			@previousButton.addClass opts.highlighted
			callback = () ->
				@nextButton.removeClass opts.disabled
				@previousButton.removeClass opts.highlighted
				top = parseInt @scrollDiv.css 'top'
				console.log "next-before top: #{top} boundary 1: #{Boundary1} boundary 2: #{Boundary2}" if @opts.debug
			@scrollDiv.stop().animate({top:"+=#{step}"},{complete:callback})
