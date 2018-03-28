/*
 *@author: Celso David
 *@since: 03/09/2012
 *@desc: Plugin que limpa o campo input ao clicar e devolve o valor inicial quando desclicar do input
 *
 */
(function($){
    $.fn.clear = function(opt){
        var $this = $(this);
        var defaults = {
            msg : $this.val(),
            vzo : ''
        };
           
        opt = $.extend(defaults, opt);
           
        $this.focus(function(){
            if($this.val() == opt.msg){
                $this.val('');
            } 
        });
        $this.blur(function(){
            if($this.val() == ''){
                $this.val(opt.msg);
            } 
        });
        return $this;
    }
                     
})(jQuery);