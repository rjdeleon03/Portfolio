$("#a-projects").on("click", function() {
    $("html, body").animate({ scrollTop: $("#projects").offset().top }, 1000);
});

$("#a-skills").on("click", function() {
    $("html, body").animate({ scrollTop: $("#skills").offset().top }, 1000);
});

var size = 400;
var sizeHalf = size/2;
var o = {
	init: function(){
		this.diagram();	
	},
	random: function(l, u){
		return Math.floor((Math.random()*(u-l+1))+l);
	},
	diagram: function(){
		var r = Raphael('diagram', size, size),
			rad = 73;

        // Center circle
		r.circle(sizeHalf, sizeHalf, 75).attr({ stroke: 'none', fill: '#193340' });

		var title = r.text(sizeHalf, sizeHalf, 'Skills').attr({
			font: '20px Arial',
			fill: '#fff'
		}).toFront();

		r.customAttributes.arc = function(value, color, rad){
			var v = 3.6*value,
				alpha = v == 360 ? 359.99 : v,
				random = o.random(91, 240),
				a = (random-alpha) * Math.PI/180,
				b = random * Math.PI/180,
				sx = sizeHalf + rad * Math.cos(b),
				sy = sizeHalf - rad * Math.sin(b),
				x = sizeHalf + rad * Math.cos(a),
				y = sizeHalf - rad * Math.sin(a),
				path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
			return { path: path, stroke: color }
		}

		$('.get').find('.arc').each(function(i){
			var t = $(this), 
				color = t.find('.color').val(),
				value = t.find('.percent').val(),
				text = t.find('.text').text();

			rad += 15;	
			var z = r.path().attr({ arc: [value, color, rad], 'stroke-width': 13 });

			z.mouseover(function(){
                this.animate({ 'stroke-width': 25, opacity: .75 }, 1000, 'elastic');
                if(Raphael.type != 'VML') //solves IE problem
					this.toFront();
				title.animate({ opacity: 0 }, 500, '>', function(){
					this.attr({ text: text + '\n' + value + '%' }).animate({ opacity: 1 }, 500, '<');
				});
            }).mouseout(function(){
				this.animate({ 'stroke-width': 13, opacity: 1 }, 1000, 'elastic');
            });
		});
	}
};
$(function(){ o.init(); });